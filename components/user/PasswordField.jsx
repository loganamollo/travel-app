import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";

export default function PasswordField({
  passwordRef,
  id='password',
  label='Password'
}) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => {
    setShowPassword(!showPassword)
  }
  const handleMouseDown = (e) =>  {
    e.preventDefault()
  }


  return (
    <TextField
      margin="normal"
      variant="standard"
      id="email"
      label={label}
      type={showPassword ? "text" : "password"}
      fullWidth
      inputRef={passwordRef}
      required
      inputProps={{minLength:6}}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleClick} onMouseDown={handleMouseDown}>
              {
                showPassword ? <VisibilityOff /> : <Visibility />
              }
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
}
