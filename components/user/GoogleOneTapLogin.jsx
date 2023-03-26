import { Google } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function GoogleOneTapLogin({}) {
  return (
    <Button variant="outlined" startIcon={<Google />}>
      Login with Google
    </Button>
  );
}
