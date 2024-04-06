import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, FormControl, InputLabel, NativeSelect } from '@mui/material';

const Personality = () => {
    const navigate = useNavigate();
    const [personality, setPersonality] = useState("");
    // handle personality choice, pass it as a prop?
    const handlePersonality = (e) => {
        e.preventDefault();
        localStorage.setItem("personality", personality);
        navigate("/chat");
    }
    return (
        <>
            <Button variant="contained" onClick={() => navigate("/")}>Go Back</Button>
            <Box sx={{ 
                mt: 2,
                display: 'flex', // Apply a flexbox layout
                flexDirection: 'column', // Stack children vertically
                alignItems: 'center', // Center children horizontally
            }}>
                <Typography>Choose the personality you want to see today!</Typography>
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Select
                    </InputLabel>
                    <NativeSelect
                        defaultValue={30}
                        inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                        }}
                        onChange={(e) => { setPersonality(e.target.value); }}
                    >
                        <option value="Classic">Classic</option>
                        <option value="Depressed">Depressed</option>
                        <option value="Angry">Angry</option>
                        <option value="Crackhead">Crackhead</option>
                    </NativeSelect>
                </FormControl>
                <Button variant="contained" onClick={handlePersonality}>Enter</Button>
            </Box>
        </>
    )
}

export default Personality;