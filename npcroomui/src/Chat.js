import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Chat.css'
import { Box, Button, TextField, Typography } from "@mui/material";

const Chat = (props) => {
  const navigate = useNavigate();

  const [textInput, setTextInput] = useState('');
  const [response, setResponse] = useState('');
  const personality = localStorage.getItem("personality");
  console.log("Personality: %s", personality);
  const responseMaker = (e) => {
    e.preventDefault()
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
    }).catch((err) => {
        console.log("failed", err.message);
    }); */
  }
  
  return (
    <>
      <Button class='btn' variant="contained" onClick={() => navigate("/")}>Go Back</Button>
      <Box
      sx={{ 
        mt: 2,
        display: 'flex', // Apply a flexbox layout
        flexDirection: 'column', // Stack children vertically
        alignItems: 'center', // Center children horizontally
      }} component="form" onSubmit={responseMaker}>
        <TextField
          fullWidth
          multiline
          rows={4}
          variant="filled"
          label="Type your message here"
          color="primary"
          onChange={(e) => setTextInput(e.target.value)}
          sx={{
            mb: 2,
            border: 2, // Sets the border
            borderColor: 'white', // Use the primary color from the theme
            borderRadius: 2, // Adds a slight border-radius
            opacity: '60%',
            transition: 'all 0.2s ease',

            '& .MuiInputLabel-filled': {
              color: 'white', // Sets label color to white
            },
            '& .MuiFilledInput-underline:before': {
              borderBottomColor: 'white', // Sets underline color to white
            },
            '& .MuiInputBase-input': {
              color: 'white', // Sets text color to white
            },
            '&:hover , &.Mui-focused': {
              opacity: '100%',
              boxShadow: 3,
              border: 2,
              borderColor: 'white',
              borderRadius: 2,
              '& .MuiInputLabel-filled': {
                color: 'white', // Ensures label color remains white on focus/hover
              },
              '& .MuiFilledInput-underline:before': {
                borderBottomColor: 'white', // Ensures underline color remains white on focus/hover
              },
              '& .MuiInputBase-input': {
                color: 'white', // Ensures text color remains white on focus/hover
            },
            },

          }}
        />
        <Button type="submit" variant="contained" color="secondary">
          Send
        </Button>
      </Box>
      <Typography variant="body1" sx={{ whiteSpace: "pre-line", mt: 2 }}>
        {response}
      </Typography>
    </>
  );
};

export default Chat;