import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, FormControl, InputLabel, NativeSelect } from '@mui/material';
import "./Personality.css";

const Personality = () => {
    const navigate = useNavigate();
    const [personality, setPersonality] = useState("Classic");
    // handle personality choice, pass it as a prop?
    const handlePersonality = () => {
        //e.preventDefault();
        localStorage.setItem("personality", personality);
        navigate("/chat");
    }
    return (
        <>
            <Button variant="contained" color="secondary" onClick={() => navigate("/")}>Go Back</Button>
            <Box sx={{ 
                mt: 2,
                display: 'flex', // Apply a flexbox layout
                flexDirection: 'column', // Stack children vertically
                alignItems: 'center', // Center children horizontally
            }}>
                <Typography className="personality">Choose the personality you want to see today!</Typography>
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Select
                    </InputLabel>
                    <NativeSelect
                        defaultValue={30}
                        sx={{ backgroundColor: "#66FCF1" }}
                        inputProps={{
                            name: 'age',
                            id: 'uncontrolled-native',
                        }}
                        onChange={(e) => { setPersonality(e.target.value); }}
                    >
                        <option value="Classic">Classic</option>
                        <option value="Nerd">Nerd</option>
                    </NativeSelect>
                </FormControl>
                <Button variant="contained" color="secondary" onClick={handlePersonality}>Enter</Button>
            </Box>
        </>
    )
}

export default Personality;