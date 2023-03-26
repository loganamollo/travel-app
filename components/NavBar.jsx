import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material"
import { Container } from "@mui/system"
import { Lock } from "@mui/icons-material"
import photoURL from "../public/my-img.jpg"
import { useValue } from "@/context/ContextProvider"
import UserIcons from "./user/UserIcons"

const user = {name: 'test', photoURL}


export default function NavBar() {
  const { state: { currentUser }, dispatch} = useValue()



  return (
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ mr: 1 }}>
            <IconButton size="large" color="inherit">
              <Menu />
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            component="h1"
            noWrap
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            You are welcome
          </Typography>
          <Typography
            variant="h6"
            component="h1"
            noWrap
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            You are welcome
          </Typography>
          {
            !currentUser ? 
            (
            <Button 
            color="inherit" 
            startIcon={<Lock />} 
            onClick={() =>dispatch({type: 'OPEN_LOGIN'})}
            >
                Login
            </Button>
            ) 
            : 
            (
              <UserIcons />
            )

          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}

