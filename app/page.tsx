
import { Link, Paper, Typography } from "@mui/material";
import AppBar from "./components/AppBar";


import { KeyGen } from "./components/KeyGen";

export default function Home() {
  return (
   <AppBar>
     <KeyGen/>
     <Paper sx={{p:4, mt: 2}}>
      <Typography variant="h5" sx={{mb: 2}}>Comming soon...</Typography>
      <Typography variant="body1"> 
        <Link href="https://datatracker.ietf.org/doc/draft-ietf-cose-hpke/">
          Integrated Encryption (Single Recipient) for COSE HPKE
        </Link>
      </Typography>
      <Typography variant="body1"> 
        <Link href="https://datatracker.ietf.org/doc/html/draft-rha-jose-hpke-encryptn">
          Key Encryption (Multiple Recipients) for JOSE HPKE
        </Link>
      </Typography>
     </Paper>
   </AppBar>
  );
}

