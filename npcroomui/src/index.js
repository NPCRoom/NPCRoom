import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material';

//Create a custom theme:
const theme = createTheme({

  palette:{
    primary:{
      main: '#1F2833',
    },
    secondary:{
      main: '#66FCF1',
    }
    

  },
  typography: {
    // Define typography options here
    fontFamily: [
      'Grandstander',
      'sans-serif'
    ].join(','),

    allVariants: {
    
    },
  },
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode> 
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    
  </React.StrictMode>
);
