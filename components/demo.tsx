import * as jose from 'jose'

import { useEffect, useState } from 'react'

import { Old } from '@/components/demo-old-way'
import { New } from '@/components/demo-new-way'

const message = `It’s a dangerous business, Frodo, going out your door.`

const generate = async () => {
  const { publicKey, privateKey } = await jose.generateKeyPair(
    'ECDH-ES+A128KW',
    { extractable: true },
  )
  const publicKeyJwk = await jose.exportJWK(publicKey)
  const privateKeyJwk = await jose.exportJWK(privateKey)
  return {
    publicKeyJwk: {
      kty: publicKeyJwk.kty,
      crv: publicKeyJwk.crv,
      x: publicKeyJwk.x,
      y: publicKeyJwk.y,
      "use": "enc",
      "key_ops": ["deriveBits"]
    },
    privateKeyJwk: {
      kty: privateKeyJwk.kty,
      crv: privateKeyJwk.crv,
      x: privateKeyJwk.x,
      y: privateKeyJwk.y,
      d: privateKeyJwk.d,
      "key_ops": ["deriveBits"]
    },
  }
}

export const Demo = () => {
  const [recipientPublicKey, setRecipientPublicKey] = useState<any>(null)
  const [recipientPrivateKey, setRecipientPrivateKey] = useState<any>(null)
  useEffect(() => {
    ;(async () => {
      const { publicKeyJwk, privateKeyJwk } = await generate()
      setRecipientPublicKey(publicKeyJwk)
      setRecipientPrivateKey(privateKeyJwk)
    })()
  }, [])
  return (
    <>
      <div className='items-center justify-between'>
      <pre>{JSON.stringify(message, null, 2)}</pre>
      <p className='text-center p-4'>⬇️</p>
      <pre className="text-sm mb-8">{JSON.stringify(recipientPublicKey, null, 2)}</pre>
      </div>
      {recipientPublicKey &&
      (
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Old
              publicKeyJwk={recipientPublicKey}
              privateKeyJwk={recipientPrivateKey}
              message={message}
            />
          </div>
          <div>
            <New 
              publicKeyJwk={recipientPublicKey}
              privateKeyJwk={recipientPrivateKey}
              message={message}
            />
          </div>
        </div>
      )}
      <p className='text-center'>⬇️</p>
      <pre className="text-sm">{JSON.stringify(message, null, 2)}</pre>
    </>
  )
}
