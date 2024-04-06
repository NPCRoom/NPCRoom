import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, TextField, Typography } from "@mui/material";

function Login() {
    const navigate = useNavigate();
    return (
        /* complete login screen here! Reformat and move button to appropriate place. It should be a simple
        username and password login screen */
        <>
            <Button class='btn' onClick={() => navigate("/")}>Back Home</Button>
            
            <Button type="submit" variant="contained" color="secondary" onClick={() => navigate("/personality")}>
            Send
            </Button>
        </>
        
    )
}

export default Login;