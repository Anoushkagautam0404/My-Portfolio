import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0ff' },
    secondary: { main: '#ff4081' },
    background: { default: '#f0f4f8' },
  },
  typography: {
    fontFamily: 'Roboto Mono, monospace',
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#00e5ff' },
    secondary: { main: '#ff4081' },
    background: { default: '#0a192f' },
  },
  typography: {
    fontFamily: 'Roboto Mono, monospace',
  },
});
