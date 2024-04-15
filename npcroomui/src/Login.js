import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import BackButton from "./Components/Logo";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault(); // Prevents the button from losing focus
  };

  return (
    <>
      <BackButton onClick={() => navigate("/")}></BackButton>
      <div id="logInBox">
        <Typography id="registerText">Login</Typography>
        <TextField
          className="registerField"
          required
          margin="normal"
          label="User Name"
          variant="filled"
        />
        <TextField
          className="registerField"
          required
          margin="normal"
          label="Password"
          variant="filled"
          type=""
          //   InputProps={{
          //     endAdornment: (
          //       <InputAdornment position="end">
          //         <IconButton
          //           aria-label="toggle password visibility"
          //           onClick={handleClickShowPassword}
          //           onMouseDown={handleMouseDownPassword}
          //         >
          //           {showPassword ? <VisibilityOff /> : <Visibility />}
          //         </IconButton>
          //       </InputAdornment>
          //     ),
          //   }}
        />
        <Button
          id="registerButton"
          type="submit"
          variant="contained"
          onClick={() => navigate("/chat")}
        >
          Login
        </Button>
      </div>
    </>
  );
}

export default Login;
