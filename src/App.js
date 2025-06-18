import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Fab, Box } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { lightTheme, darkTheme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';
import CursorTrail from "./components/CursorTrail";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <CursorTrail />
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Navbar toggleTheme={() => setDarkMode(!darkMode)} />

          <Box sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>

          <Footer />
        </Box>

        <Fab
          color="primary"
          href="#"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Router>
    </ThemeProvider>
  );
}

export default App;
