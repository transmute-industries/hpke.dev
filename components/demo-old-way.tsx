import { useEffect, useState } from 'react'

import * as jose from 'jose'

import { Flow } from './flow'
const alg = 'ECDH-ES+A128KW'

const encrypt = async (plaintext: Uint8Array, recipientPublicKeyJwk: any) => {
  const publicKeyJwk = JSON.parse(JSON.stringify(recipientPublicKeyJwk))
  const { alg } = publicKeyJwk
  const enc = alg.split('+').pop().replace('KW', 'GCM') // sure complain about this... I didn't invent JOSE.
  // sender is not 100% sure recipient will understand "enc" at this point.
  const jwe = await new jose.FlattenedEncrypt(plaintext)
    .setProtectedHeader({ alg, enc })
    .encrypt(await jose.importJWK(publicKeyJwk))
  return jwe
}

const decrypt = async (jwe: any, recipientPrivateKeyJwk: any) => {
  const privateKeyJwk = JSON.parse(JSON.stringify(recipientPrivateKeyJwk))
  // uncomment this to see what I mean about key restriction being useful.
  // before attempting stuff that is obviously not going to work...
  // recipientPrivateKeyJwk.alg = 'RSA-OAEP-256'
  const { plaintext } = await jose.flattenedDecrypt(
    jwe,
    await jose.importJWK(privateKeyJwk),
  )
  return new TextDecoder().decode(plaintext)
}

export const Old = ({ publicKeyJwk, privateKeyJwk, message }: any) => {
  const [recoveredMessage, setRecoveredMessage] = useState<any>(null)
  const [jwe, setJwe] = useState<any>(null)
  useEffect(() => {
    ;(async () => {
      const plaintext = new TextEncoder().encode(message)
      const jwe = await encrypt(plaintext, { ...publicKeyJwk, alg })
      const recoveredPlaintext = await decrypt(jwe, { ...privateKeyJwk, alg })
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
