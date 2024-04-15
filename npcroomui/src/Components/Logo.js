import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import NPCLogo from "./../NPCLogo.png";
import "./Logo.css";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

// const BackButton = styled(Button)(({ theme }) => ({
//   // Custom styles here, for example:
//   backgroundColor: theme.palette.secondary.main, // Use primary color from theme
//   // Use contrast text color from theme
//   '&:hover': {
//     backgroundColor: theme.palette.primary.dark, // Use darker primary color on hover from theme
//     color: theme.palette.primary.contrastText,
//     },

// You can replace or remove these styles according to your needs
// }));

function Logo() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div id="logoDiv" style={{ cursor: "pointer" }} onClick={handleClick}>
      <Typography id="logoText">NPC ROOM</Typography>
      <img src={NPCLogo} alt="NPC Logo" id="logoImage"></img>
    </div>
  );
}

export default Logo;
