
import { base64url } from 'jose'
import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('./editor'), {
  ssr: false,
})

export const Flow = ({
  message,
  ciphertext,
  plaintext,
  alg,
  publicKeyJwk,
  privateKeyJwk,
}: any) => {

  let extra = null
  if (alg === 'ECDH-ES+A128KW' && ciphertext){
    extra = JSON.stringify(JSON.parse(new TextDecoder().decode(base64url.decode(ciphertext.protected))), null, 2)
  }
  
  return (
    <>
      <h3 className="text-xl text-center">{alg}</h3>
      <pre className='text-sm'>{JSON.stringify({ ...publicKeyJwk, alg }, null, 2)}</pre>
      <p className="text-center p-4">⬇️</p>
      <Editor value={JSON.stringify(ciphertext, null, 2)}/>
      {extra && <>
        <h3 className="text-xl text-center">Protected</h3>
        <Editor value={extra}/>
      </>}
      <p className="text-center p-4">⬇️</p>
      <pre className='text-sm'>{JSON.stringify({ ...privateKeyJwk, alg }, null, 2)}</pre>
    </>
  )
}
