import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault(); // Prevents the button from losing focus
  };
  let toggleFail = false;
  /*
  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post("http://localhost:8080/login", {
        username: username,
        password: password
      });
      console.log(response.data);
      if(response.data == "Success") {
        navigate("/personality");
      } else {
        toggleFail = true;
      }
    } catch(e) {
      console.error(e);
    }
  } */
  
  const handleLogin = (e) => {
    e.preventDefault();
    Promise.resolve(axios.post("http://localhost:8080/login", {
      username: username,
      password: password
    })).then((response) => {
      console.log(response.data);
      if(response.data === "Failure") {
        toggleFail = true;
      } else {
        navigate("/personality");
      }
    }).catch((err) => {
      console.error("failed", err.message);
    })
  }
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
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          className="registerField"
          required
          margin="normal"
          label="Password"
          variant="filled"
          type="password"
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
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          id="registerButton"
          type="submit"
          variant="contained"
          onClick={handleLogin}
        >
          Login
        </Button>
        {<Typography>Incorrect User or Password</Typography> && toggleFail}
      </div>
    </>
  );
}

export default Login;
