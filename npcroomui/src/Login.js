import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {
  Button,
  TextField,
  Typography,
} from "@mui/material";
import BackButton from "./Components/Logo";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let toggleFail = false;
  
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
      <div id="loginBox">
        <Typography id="loginText">Login</Typography>
        <TextField
          className="loginField"
          required
          margin="normal"
          label="User Name"
          variant="filled"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          className="loginField"
          required
          margin="normal"
          label="Password"
          variant="filled"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {<Button id="loginButton"
        variant="contained"
        onClick={() => navigate("/register")}>
            Click to Register
        </Button>}
        <Button
          id="loginButton"
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
