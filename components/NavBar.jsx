import { AppBar, Box, IconButton, Menu, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function NavBar() {
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
          sx={{flexGrow: 1, display:{xs: 'none', md: 'flex'}}}
          >
            You are welcome
          </Typography>
          <Typography
          variant="h6"
          component="h1"
          noWrap
          sx={{flexGrow: 1, display:{xs: 'flex', md: 'none'}}}
          >
            You are welcome
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
