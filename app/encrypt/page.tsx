"use client";

import AppBar from "../components/AppBar";

import { useEffect, useState } from "react";

import { Encrypt } from "../components/Encrypt";

import Pako from "pako";
import { base64url } from "jose";

export default function EncryptPage() {
  const [publicKeyJwk, setPublicKeyJwk] = useState();
  useEffect(() => {
    if (window.location.hash.startsWith("#pako:")) {
      const publicKey = JSON.parse(new TextDecoder().decode(Pako.inflate(base64url.decode(window.location.hash.replace('#pako:', '')))))
      setPublicKeyJwk(publicKey)
    }
  }, []);
  return (
    <AppBar>
      {publicKeyJwk ? (
        <>
          <Encrypt publicKeyJwk={publicKeyJwk} />
        </>
      ) : (
        <>
        Scan QR Code.
        </>
      )}
    </AppBar>
  );
}
