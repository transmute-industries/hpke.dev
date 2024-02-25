"use client";

import AppBar from "../components/AppBar";

import { useEffect, useState } from "react";

import { Decrypt } from "../components/Decrypt";

export default function DecryptPage() {
  const [jwe, setJwe] = useState();
  const [encodedCompressedCoseEncrypt0, setEncodedCompressedCoseEncrypt0] = useState();
  useEffect(() => {
    if (window.location.hash.startsWith("#jwe:")) {
      const jwe = window.location.hash.replace('#jwe:', '') as any
      setJwe(jwe)
    }

    if (window.location.hash.startsWith("#cose-encrypt0:")) {
      const encoded = window.location.hash.replace('#cose-encrypt0:', '') as any
      setEncodedCompressedCoseEncrypt0(encoded)
    }
  }, []);
  return (
    <AppBar>
      {(jwe || encodedCompressedCoseEncrypt0)? (
        <>
          <Decrypt jwe={jwe} encodedCompressedCoseEncrypt0={encodedCompressedCoseEncrypt0}/>
        </>
      ) : (
        <>
        Scan QR Code.
        </>
      )}
    </AppBar>
  );
}
