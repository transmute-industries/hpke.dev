"use client";

import { AppDrawer } from "./AppDrawer";
import { Box, Paper } from "@mui/material";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { useParams } from "next/navigation";
import { Chip } from "@mui/material";
import LockPerson from "@mui/icons-material/LockPerson";
import { compact } from "@/services/jose-hpke";
import { Dropzone } from "@/app/components/Dropzone";
import NoEncryptionIcon from "@mui/icons-material/NoEncryption";
import Avatar from "@mui/material/Avatar";

import CodeMirror from "@uiw/react-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { andromeda } from "@uiw/codemirror-theme-andromeda";

import { EditorView } from "@uiw/react-codemirror";

export function Decrypt() {
  const params = useParams<{ did: string }>() as any;
  const [message, setMessage] = React.useState() as any;
  const handleFilesAccepted = async (files: File[]) => {
    const [file] = files;
    const privateKeyText = await file.text();
    const privateKey = JSON.parse(privateKeyText);
    const jwe = decodeURIComponent(params.did).replace("did:jwe:", "");
    const plaintext = await compact.decrypt(jwe, privateKey);
    setMessage(new TextDecoder().decode(plaintext));
  };
  return (
    <AppDrawer>
      <Box sx={{ display: "flex", flexDirection: "row", mb: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            Message
          </Typography>
        </Box>
      </Box>
      <Chip
        deleteIcon={<LockPerson />}
        onDelete={() => {}}
        label={decodeURIComponent(params.did).substring(0, 32) + "..."}
      />
      {message ? (
        <Box sx={{ mt: 2 }}>
          <Paper sx={{ p: 2 }}>
            <Avatar sx={{ mb: 2 }}>
              <NoEncryptionIcon />
            </Avatar>
            <Box sx={{ mt: 2 }}>
              <CodeMirror
                theme={andromeda}
                value={message}
                onChange={(value) => {
                  setMessage(value);
                }}
                extensions={[markdown(), EditorView.lineWrapping]}
              />
            </Box>
          </Paper>
        </Box>
      ) : (
        <Box sx={{ mt: 2 }}>
          <Dropzone
            dragText={"Drag exported private key here"}
            dropText={"Drop to decrypt."}
            onFilesAccepted={handleFilesAccepted}
          />
        </Box>
      )}
    </AppDrawer>
  );
}
