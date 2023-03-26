import { useValue } from "@/context/ContextProvider";
import { Mail, Notifications } from "@mui/icons-material";
import { Avatar, Badge, Box, IconButton, Tooltip } from "@mui/material";
import Image from "next/image";

export default function UserIcons () {
  const { state: { currentUser }} = useValue()
  return (
    <Box>
      <IconButton size="large" color="inherit">
        <Badge color="error" badgeContent={5}>
          <Mail />
        </Badge>
      </IconButton>
      <IconButton size="large" color="inherit">
        <Badge color="error" badgeContent={20}>
          <Notifications />
        </Badge>
      </IconButton>
      <Tooltip title="Open User Settings">
        <IconButton>
          <Avatar >
            {
              currentUser.photoURL 
              ?
              <Image src={currentUser.photoURL} alt="User Icon" fill />
              :
              currentUser?.name?.charAt(0).toUpperCase()
            }
          </Avatar>
        </IconButton>
      </Tooltip>
    </Box>
  )
}