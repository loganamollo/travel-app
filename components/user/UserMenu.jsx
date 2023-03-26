import { useValue } from "@/context/ContextProvider";
import { Logout, Settings } from "@mui/icons-material";
import { ListItemIcon, Menu, MenuItem } from "@mui/material";

export default function UserMenu({ anchorUserMenu, setAnchorUserMenu }) {
  const {dispatch} = useValue()
  const handleCloseUserMenu = () => {
    setAnchorUserMenu(null);
  }

  
  return (
    <Menu
      anchorEl={anchorUserMenu}
      open={Boolean(anchorUserMenu)}
      onClose={handleCloseUserMenu}
      onClick={handleCloseUserMenu}
    >
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Profile
      </MenuItem>
      <MenuItem
      onClick={() => dispatch({type: 'UPDATE_USER', payload: null}) }
      >
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
}
