import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import { Paper, Typography } from '@mui/material';

import { teal, deepPurple } from "@mui/material/colors";

export const Dropzone = ({ onFilesAccepted, sx, dragText,dropText }:any) => {
  const onDrop = useCallback(
    (acceptedFiles:any) => {
      onFilesAccepted(acceptedFiles);
    },
    [onFilesAccepted]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Paper
      {...getRootProps() as any}
      align="center"
      style={{
        border: !isDragActive
          ? '1px ' + deepPurple.A200 + ' dashed'
          : '1px ' +  teal.A200 + ' dashed',
        boxShadow: 'none',
        textAlign: 'center',
        cursor: 'pointer'
      }}
      sx={{
        height: 96,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        ...sx
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <Typography color={teal.A200}>
          {dropText || 'Drop file here.'}
        </Typography>
      ) : (
        <Typography color={deepPurple.A200}>
          {dragText || 'Drag file here.'}
        </Typography>
      )}
    </Paper>
  );
};

