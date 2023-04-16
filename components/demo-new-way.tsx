import { useEffect, useState } from 'react'
import * as jose from 'jose'

import { Kem, Kdf, Aead, CipherSuite } from 'hpke-js'
import { Flow } from './flow'

// tag: TBD 1
const alg = 'APPLE-HPKE-v1'
const suites:any = {
  [alg]: new CipherSuite({
    kem: Kem.DhkemP256HkdfSha256,
    kdf: Kdf.HkdfSha256,
    aead: Aead.Aes128Gcm
  })
}

// const generate = async (alg: string) => {
//   if (alg !== 'APPLE-HPKE-v1') {
//     throw new Error('Unsupported alg')
//   }
//   const { publicKey, privateKey } = await suites[alg].generateKeyPair()
//   const publicKeyJwk = await window.crypto.subtle.exportKey('jwk', publicKey)
//   const privateKeyJwk = await window.crypto.subtle.exportKey('jwk', privateKey)
//   return {
//     publicKeyJwk: {
//       kty: publicKeyJwk.kty,
//       crv: publicKeyJwk.crv,
//       alg,
//       x: publicKeyJwk.x,
//       y: publicKeyJwk.y,
//     },
//     privateKeyJwk: {
//       kty: privateKeyJwk.kty,
//       crv: privateKeyJwk.crv,
//       alg,
//       x: privateKeyJwk.x,
//       y: privateKeyJwk.y,
//       d: privateKeyJwk.d,
//     }
//   }
// }

const encrypt = async (plaintext: Uint8Array, recipientPublicKeyJwk: any) => {
  const publicKeyJwk = JSON.parse(JSON.stringify(recipientPublicKeyJwk))
  const {alg} = publicKeyJwk;
  delete publicKeyJwk.alg;
  const publicKey = await window.crypto.subtle.importKey(
    "jwk",
    publicKeyJwk,
    {
      name: "ECDH",
      namedCurve: publicKeyJwk.crv,
    },
    true,
    []
  );
  const sender = await suites[alg].createSenderContext({
    recipientPublicKey: publicKey
  });
  const ct = await sender.seal(plaintext);
  const enc = jose.base64url.encode(new Uint8Array(sender.enc)) ;
  const ciphertext = jose.base64url.encode(new Uint8Array(ct)) ;
  return {
    ciphertext,
    enc,
    // alg // is not required in envelop formats.
  }
}

const decrypt = async (jweLike:any, recipientPrivateKeyJwk: any) =>{
  const privateKeyJwk = JSON.parse(JSON.stringify(recipientPrivateKeyJwk))
  const {alg} = privateKeyJwk;
  // alg is not required in envelop formats.
  // if (jweLike.alg !== alg){
  //   throw new Error("Unsuported alg")
  // }
  delete privateKeyJwk.alg;
  const privateKey = await window.crypto.subtle.importKey(
    "jwk",
    privateKeyJwk,
    {
      name: "ECDH",
      namedCurve: privateKeyJwk.crv,
    },
    true,
    ['deriveBits']
  );
  const enc = jose.base64url.decode(jweLike.enc) ;
  const recipient = await suites[alg].createRecipientContext({
    recipientKey: privateKey, // rkp (CryptoKeyPair) is also acceptable.
    enc: enc,
  });
  const ct = jose.base64url.decode(jweLike.ciphertext) ;
  const pt = await recipient.open(ct);
  return new TextDecoder().decode(pt);
}

export const New = ({publicKeyJwk, privateKeyJwk, message}: any) => {

  const [recoveredMessage, setRecoveredMessage] = useState<any>(null)
  const [jwe, setJwe] = useState<any>(null)
  useEffect(() => {
    ;(async () => {
      const plaintext = new TextEncoder().encode(message)
      const jwe = await encrypt(plaintext, {...publicKeyJwk, alg})
      const recoveredPlaintext = await decrypt(jwe, {...privateKeyJwk, alg})
      setJwe(jwe)
      setRecoveredMessage(recoveredPlaintext)
    })()
  }, [publicKeyJwk, privateKeyJwk, message])
  return (
    <Flow
      alg={alg}
      message={message}
      ciphertext={jwe}
      plaintext={recoveredMessage}
      publicKeyJwk={publicKeyJwk}
      privateKeyJwk={privateKeyJwk}
    />
  )
}
