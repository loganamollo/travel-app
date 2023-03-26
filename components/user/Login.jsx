import { useValue } from "@/context/ContextProvider";
import { Close, Send } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import GoogleOneTapLogin from "./GoogleOneTapLogin";
import PasswordField from "./PasswordField";

export default function Login({}) {
  const {
    state: { openLogin },
    dispatch,
  } = useValue();
  const [title, setTitle] = useState();
  const [isRegistered, setRegistered] = useState(null);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleClose = () => {
    dispatch({ type: "CLOSE_LOGIN" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // test loading
    dispatch({type: "START_LOADING"})

    setTimeout(() => {
      dispatch({type: "END_LOADING"})
    }, 6000)

    // testing Notification
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    if (password !== confirmPassword) {
      dispatch({
        type: "UPDATE_ALERT",
        payload: {
          open: true,
          severity: "error",
          message: "Passwords do not match",
        },
      });
    }
  };

  useEffect(() => {
    isRegistered ? setTitle("Register") : setTitle("Login")
  }, [isRegistered]);
  

  return (
    <Dialog open={openLogin} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <IconButton
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          color: (theme) => theme.palette.grey[500],
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
          {isRegistered && (
            <TextField
              autoFocus
              margin="normal"
              variant="standard"
              id="name"
              label="Name"
              type="text"
              fullWidth
              inputRef={nameRef}
              inputProps={{ minlength: 2 }}
              required
            />
          )}
          <TextField
            autoFocus={!isRegistered}
            margin="normal"
            variant="standard"
            id="email"
            label="Email"
            type="email"
            fullWidth
            inputRef={emailRef}
            required
          />
          <PasswordField {...{ passwordRef }} />
          {isRegistered && (
            <PasswordField
              passwordRef={confirmPasswordRef}
              id="confirmPassword"
              label="Confirm Password"
            />
          )}
        </DialogContent>
        <DialogActions sx={{ justifyContent: "right", px: "24px" }}>
          <Button type="submit" variant="contained" endIcon={<Send />}>
            Submit
          </Button>
        </DialogActions>
      </form>
      <DialogActions sx={{ justifyContent: "center", p: "5px 24px" }}>
        {isRegistered
          ? "Have an account? Sign in"
          : "Don't have an account? Create one"}
        <Button onClick={() => setRegistered(!isRegistered)}>
          {isRegistered ? "Login" : "Register"}
        </Button>
      </DialogActions>
      <DialogActions sx={{ justifyContent: "center", py: "24px" }}>
        <GoogleOneTapLogin />
      </DialogActions>
    </Dialog>
  );
}
