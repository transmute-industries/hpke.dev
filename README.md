# [hpke.dev](https://hpke.dev)

Imagine:

```json
{
  "kty": "EC",
  "crv": "P-256",
  "x": "RGuElrDRaOTXHgOEv4ezdSTQaop_Lbb1doFBjcpRFOw",
  "y": "MAa3Kzj9XcF93vMCtUirjwggStYcXXmaCkYLCzZ4st4",
  "alg": "HPKEv1-Base-DHKEM(P256,HKDFSHA256)-HKDFSHA256"
}
```

### Algorithms

See [IANA Assignments for HPKE](https://www.iana.org/assignments/hpke/hpke.xhtml)

The following table is used to restrict JSON Web Keys.

| jose    | cose | mode | kem    | kdf    | aead   |
| ------- | ---- | ---- | ------ | ------ | ------ |
| HPKE-B0 | 1024 | base | 0x0010 | 0x0001 | 0x0001 |
| HPKE-B1 | ...  | base | 0x0011 | 0x0002 | 0x0002 |


```json
{
  "kty": "EC",
  "crv": "P-256",
  "alg": "HPKE-B0",
  "x": "RGuElrDRaOTXHgOEv4ezdSTQaop_Lbb1doFBjcpRFOw",
  "y": "MAa3Kzj9XcF93vMCtUirjwggStYcXXmaCkYLCzZ4st4"
}
```