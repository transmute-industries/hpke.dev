"use client";

import AppBar from "../components/AppBar";

import { useEffect, useState } from "react";

import { Decrypt } from "../components/Decrypt";

export default function DecryptPage() {
  const [jwe, setJwe] = useState();
  useEffect(() => {
    if (window.location.hash.startsWith("#jwe:")) {
      const jwe = window.location.hash.replace('#jwe:', '') as any
      setJwe(jwe)
    }
  }, []);
  return (
    <AppBar>
      {jwe ? (
        <>
          <Decrypt jwe={jwe} />
        </>
      ) : (
        <>
        Scan QR Code.
        </>
      )}
    </AppBar>
  );
}
