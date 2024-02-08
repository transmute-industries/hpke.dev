"use client";

import { AppDrawer } from "./AppDrawer";

import { Button, Box } from "@mui/material";

import * as React from "react";
import * as jose from "jose";

import Typography from "@mui/material/Typography";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { Chip } from "@mui/material";

import LockPerson from "@mui/icons-material/LockPerson";

import { compact } from "@/services/jose-hpke"; 

import CodeMirror from '@uiw/react-codemirror';
import { markdown } from '@codemirror/lang-markdown';
import { andromeda } from '@uiw/codemirror-theme-andromeda';

import { EditorView } from "@uiw/react-codemirror"


export function Encrypt() {
  const router = useRouter()
  const params = useParams<{ did: string }>() as any;

  const [message, setMessage] = React.useState('# ⌛ My lungs taste the air of Time Blown past falling sands ⌛')

  const encryptTo = async () => {
    const publicKey = JSON.parse(new TextDecoder().decode(jose.base64url.decode(decodeURIComponent(params.did).replace("did:jwk:", ""))));
    const plaintext = new TextEncoder().encode(message)
    const jwe = await compact.encrypt(plaintext, publicKey)
    const did = `did:jwe:${jwe}`
    router.push('/decrypt/' + did)
  };
  return (
    <AppDrawer>
      <Box sx={{ display: "flex", flexDirection: "row", mb: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            Recipient
          </Typography>
        </Box>

        <Box>
          <Button
            variant="outlined"
            color="secondary"
            onClick={encryptTo}
            endIcon={<LockPerson />}
          >
            Encrypt
          </Button>
        </Box>
      </Box>

      <Chip
        deleteIcon={<LockPerson />}
        onDelete={() => {}}
        label={decodeURIComponent(params.did).substring(0, 32) + "..."}
      />

      <Box sx={{mt: 2}}>
      <CodeMirror 
      theme={andromeda}
      value={message}  
      onChange={(value)=>{
        setMessage(value)
      }}
      extensions={[
        markdown(),
        EditorView.lineWrapping
      ]} 
    />
      </Box>
    </AppDrawer>
  );
}
