import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material';

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


const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<ThemeProvider theme={theme}><App /></ThemeProvider>);
}