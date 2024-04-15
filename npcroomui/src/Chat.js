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
  console.log("Personality: %s", personality);
  const responseMaker = (e) => {
    e.preventDefault();
    console.log("On the way");
    Promise.resolve(axios.post("http://localhost:8080/"+personality, textInput)).then(() => {
      console.log("message has been sent")
      Promise.resolve(axios.get("http://localhost:8080/"+personality)).then((res) => {
        setResponse(response + "You: " + textInput + "\n" + "NPC: " + res.data);
      })
    }).catch((err) => {
        console.log("failed", err.message);
    });
    /*
    Promise.resolve(axios.post("https://npcroom-processing.onrender.com", textInput)).then(() => {
      console.log("message has been sent")
      Promise.resolve(axios.get("https://npcroom-processing.onrender.com")).then((res) => {
        setResponse(response + "You: " + textInput + "\n" + "NPC: " + res.data);
      })
      .catch((err) => {
        console.log("failed", err.message);
      }); */
  };

  return (
    <>
      <BackButton></BackButton>
      <Typography variant="body1" sx={{ whiteSpace: "pre-line", mt: 2 }}>
        {response}
      </Typography>
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
    </>
  );
};

export default Chat;
