import "./Logo.css";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const NPCLogo = require('../NPCLogo.png');


function Logo() {
  const navigate = useNavigate();

  return (
    <div id="logoDiv" style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
      <Typography id="logoText">NPC ROOM</Typography>
      <img src={NPCLogo} alt="NPC Logo" id="logoImage"></img>
    </div>
  );
}

export default Logo;
