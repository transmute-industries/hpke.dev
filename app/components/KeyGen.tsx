'use client'

import { Button, Box, Grid } from "@mui/material"

import CasinoIcon from '@mui/icons-material/Casino';
import KeyIcon from '@mui/icons-material/Key';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { useEffect, useState } from "react";

import *  as jose from 'jose'

import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { andromeda } from '@uiw/codemirror-theme-andromeda';

import { EditorView } from "@uiw/react-codemirror"

import { useRouter } from "next/navigation";

import pako from 'pako'

const orderJwk = (jwk:any)=>{
 const {kid, alg, kty, crv, x, y, d} = jwk
 return JSON.parse(JSON.stringify({kid, alg, kty, crv, x, y, d}))
}

function downloadObjectAsJson(exportObj:any, exportName:string){
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, 2));
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href",     dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

export const KeyGen = () =>{
  const router = useRouter()
  const [privateKey, setPrivateKey] = useState<any>()
  const [publicKey, setPublicKey] = useState<any>()

  const generateKey = async ()=>{
    const k = await jose.generateKeyPair('ECDH-ES+A128KW', { extractable: true })
    const publicKeyJwk = await jose.exportJWK(k.publicKey);
    const privateKeyJwk = await jose.exportJWK(k.privateKey);
    const kid = await jose.calculateJwkThumbprintUri(publicKeyJwk)
    const alg = 'HPKE-Base-P256-SHA256-AES128GCM'
    setPrivateKey(orderJwk({kid, alg, ...privateKeyJwk}))
    setPublicKey(orderJwk({kid, alg, ...publicKeyJwk}))
  }

  const exportPrivateKey = async ()=>{
    downloadObjectAsJson(privateKey, `${privateKey.kid.split(':').pop()}`)
  }

  const encryptTo = async ()=>{
    const jwk = JSON.stringify(publicKey)
    const compressed = pako.deflate(jwk)
    router.push('/encrypt#pako:' + jose.base64url.encode(compressed))
  }

  useEffect(()=>{
    generateKey()
  }, [])

  return <Box>
    <Box sx={{display: 'flex', flexDirection: 'row', mb: 2}}>
      <Box sx={{mr: 2}}>
        <Button onClick={generateKey} endIcon={<CasinoIcon/>}>Generate New Key</Button>
      </Box>
      <Box sx={{flexGrow: 1}}>
        <Button onClick={exportPrivateKey} endIcon={<KeyIcon/>}>Export Private Key</Button>
      </Box>
      <Box >
        <Button onClick={encryptTo} endIcon={<LockPersonIcon/>}>Encrypt To</Button>
      </Box>
    </Box>
    <CodeMirror 
   
      theme={andromeda}
      value={JSON.stringify(publicKey, null, 2)}  
      extensions={[
        json(),
        EditorView.lineWrapping
      ]} 
    />
  </Box>
}