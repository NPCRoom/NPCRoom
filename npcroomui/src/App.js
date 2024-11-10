import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Chat from "./Chat";
import Login from "./Login";
import Register from './Register';
import Personality from "./Personality";
import './App.css'
import './Home.css'
import './Chat.css'

const App = () => {
  return (

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/personality" element={<Personality />} />
        </Routes>
      </Router>
  );
};

export default App;

