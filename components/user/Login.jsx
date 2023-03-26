import { useValue } from "@/context/ContextProvider";
import { Close, Send } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from "@mui/material";
import { useRef, useState } from "react";
import PasswordField from "./PasswordField";

export default function Login ({}) {
  const {state: { openLogin }, dispatch} = useValue()
  const [title, setTitle] = useState()
  const [isRegistered, setRegistered] = useState(false)
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  const handleClose = () => {
    dispatch({type: 'CLOSE_LOGIN'})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

  }


  return (
    <Dialog
    open={openLogin}
    onClose={handleClose}
    >
      <DialogTitle>
        {title}
      </DialogTitle>
      <IconButton
      sx={{
        position: 'absolute',
        top: 8,
        right: 8,
        color: (theme) => theme.palette.grey[500]
      }}
      onClick={handleClose}
      >
        <Close />
      </IconButton>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>
            Please fill in your information in the fields below
          </DialogContentText>
          {
            isRegistered &&
            <TextField
            autoFocus
            margin="normal"
            variant="standard"
            id="name"
            label="Name"
            type="text"
            fullWidth
            inputRef={nameRef}
            inputProps={{minlength: 2}}
            required
            />
          }
          <TextField
            autoFocus={!isRegistered }
            margin="normal"
            variant="standard"
            id="email"
            label="Email"
            type="email"
            fullWidth
            inputRef={emailRef}
            required
            />
            <PasswordField {...{passwordRef}} />
            {
              isRegistered &&
              <PasswordField 
              passwordRef={confirmPasswordRef}
              id='confirmPassword'
              label="Confirm Password"
              />
            }
        </DialogContent>
        <DialogActions>
          <Button type="submit" variant="contained" endIcon={<Send /> }>
            Submit
          </Button>
        </DialogActions>
      </form>
      <DialogActions sx={{justifyContent: 'left', p: '5px 24px'}}>
        {
          isRegistered
          ?
          'Do you have an account? Sign in now'
          :
          "Don't have an account? Create one now"
        }
        <Button onClick={() => setRegistered(!isRegistered)}>
          {
            isRegistered
            ?
            'Login'
            :
            'Register'
          }
        </Button>
      </DialogActions>
    </Dialog>
  )
}