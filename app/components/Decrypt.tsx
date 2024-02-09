"use client";

import { Box, Paper } from "@mui/material";
import * as React from "react";
import Typography from "@mui/material/Typography";
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

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export function Decrypt({jwe}: {jwe: string}) {
  const [snackMessage, setSnackMessage] = React.useState('')
  const [message, setMessage] = React.useState() as any;
  const handleFilesAccepted = async (files: File[]) => {
    try{
      const [file] = files;
      const privateKeyText = await file.text();
      const privateKey = JSON.parse(privateKeyText);
      const plaintext = await compact.decrypt(jwe, privateKey);
      setMessage(new TextDecoder().decode(plaintext));
    } catch(e){
      setSnackMessage('Decryption failed.')
      setOpen(true);
    }
  };
  const [open, setOpen] = React.useState(false);
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      {/* <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button> */}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", mb: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            Message
          </Typography>
        </Box>
      </Box>
      <Chip
        deleteIcon={<LockPerson />}
        onDelete={() => {
          navigator.clipboard.writeText(jwe);
          setSnackMessage('Copied to clipboard.')
          setOpen(true);
        }}
        label={jwe.substring(0, 32) + "..."}
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
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={snackMessage}
        action={action}
      />
    </>
  );
}
