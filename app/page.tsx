
import styles from "./page.module.css";
import { AppDrawer } from "./components/AppDrawer";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { KeyGen } from "./components/KeyGen";

export default function Home() {
  return (
   <AppDrawer>
    <Grid2>
      <Grid2>
        <KeyGen/>
      </Grid2>
    </Grid2>
   </AppDrawer>
  );
}

