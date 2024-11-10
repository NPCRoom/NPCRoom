import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Chat.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import BackButton from "./Components/Logo";
import InputAdornment from "@mui/material/InputAdornment";

const Chat = (props) => {
  const navigate = useNavigate();

  const [textInput, setTextInput] = useState('');
  const [response, setResponse] = useState('');
  const personality = localStorage.getItem("personality");
  
  const responseMaker = (e) => {
    e.preventDefault();
    console.log("On the way");
    Promise.resolve(axios.post("http://localhost:8080/"+personality, textInput)).then((res) => {
      console.log("Message sent successfully");
      setResponse(response + "You: " + textInput + "\n" + "NPC: " + res.data);
    }).catch((err) => {
      console.error(err);
    });
  };

  return (
    <>
      <BackButton></BackButton>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: '64px' }}>
        <Box className="chatText" sx={{ display: "flex", flexDirection: "column", 
          alignItems: "center", border: 2, borderColor: "primary", borderRadius: "8px" }}>
          <Typography variant="body1" sx={{ whiteSpace: "pre-line", mt: 2 }}>
            {response}
          </Typography>
        </Box>
        <Box
          className="textBox"
          sx={{
            mt: 2,
            display: "flex", // Apply a flexbox layout
            flexDirection: "column", // Stack children vertically
            alignItems: "center", // Center children horizontally
          }}
          component="form"
          onSubmit={responseMaker}
        >
          <TextField
            fullWidth
            multiline
            rows={2}
            variant="outlined"
            placeholder="Type your message here"
            onChange={(e) => setTextInput(e.target.value)}
            className="chatText"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    id="sendButton"
                    type="submit"
                    variant="contained"
                    color="secondary"
                  >
                    Send
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Chat;
