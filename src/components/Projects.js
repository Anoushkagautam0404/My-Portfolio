import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Pagination,
} from "@mui/material";
import { motion } from "framer-motion";
import CursorTrail from "./CursorTrail";
import bgVideo from "../assets/bg-tech.mp4";

const allProjects = [
  {
    title: "CryptoTracker",
    desc: "Real-time cryptocurrency dashboard with API integration, charts, and search.",
    stack: ["React", "CoinGecko API", "Material-UI"],
  },
  {
    title: "BlogPost Platform",
    desc: "Blog app with user authentication and dashboard.",
    stack: ["Node.js", "Express", "JWT"],
  },
  {
    title: "Robotic Car",
    desc: "WiFi-controlled 6WD robot with Arduino + sensors.",
    stack: ["C++", "ESP8266"],
  },
  {
    title: "Portfolio Website",
    desc: "Animated portfolio with React + MUI + Framer Motion.",
    stack: ["React", "MUI", "Framer"],
  },
];

const itemsPerPage = 3;

const Projects = () => {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(allProjects.length / itemsPerPage);

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => (document.body.style.overflowX = "auto");
  }, []);

  const handleChange = (_, value) => {
    setPage(value);
    window.scrollTo({
      top: document.getElementById("projects").offsetTop - 100,
      behavior: "smooth",
    });
  };

  const paginatedProjects = allProjects.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box
      id="projects"
      sx={{
        position: "relative",
        minHeight: "100vh",
        py: 10,
        px: { xs: 2, sm: 4, md: 8 },
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* 🎥 Fullscreen Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -3,
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* 🌫️ Subtle Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.25)",
          zIndex: -2,
        }}
      />

      {/* 🌟 Heading */}
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 900,
          letterSpacing: 2,
          mb: 2,
          background: "linear-gradient(to right, #00e5ff, #ff4081)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 25px #00e5ff88",
        }}
      >
        🛠️ My Projects
      </Typography>

      {/* 💫 Underline Glow */}
      <Box
        sx={{
          mx: "auto",
          mb: 6,
          width: "180px",
          height: "4px",
          borderRadius: "2px",
          background: "linear-gradient(90deg, #00e5ff, #ff4081)",
          boxShadow: "0 0 20px #00e5ffaa",
          animation: "pulseBar 4s ease-in-out infinite",
          "@keyframes pulseBar": {
            "0%": { transform: "scaleX(0.6)" },
            "50%": { transform: "scaleX(1)" },
            "100%": { transform: "scaleX(0.6)" },
          },
        }}
      />

      {/* 🔧 Project Grid */}
      <Grid container spacing={4} justifyContent="center">
        {paginatedProjects.map((proj, i) => (
          <Grid item xs={12} md={4} key={i}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              style={{ height: "100%" }}
            >
              <Card
                sx={{
                  height: "100%",
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(16px)",
                  borderRadius: "20px",
                  border: "1px solid #00e5ff33",
                  boxShadow: "0 0 25px #00e5ff22",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    boxShadow: "0 0 40px #00e5ff99",
                    transform: "scale(1.02)",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      fontSize: "1.2rem",
                      background: "linear-gradient(to right, #00e5ff, #ff4081)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 0 8px #00e5ffaa",
                    }}
                  >
                    {proj.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 2,
                      fontStyle: "italic",
                      color: "#cfd8dc",
                      lineHeight: 1.6,
                    }}
                  >
                    {proj.desc}
                  </Typography>
                  {proj.stack.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      variant="outlined"
                      size="small"
                      sx={{
                        mr: 1,
                        mb: 1,
                        color: "#00e5ff",
                        borderColor: "#00e5ff",
                        backgroundColor: "#00e5ff10",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* 📄 Pagination */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChange}
          variant="outlined"
          shape="rounded"
          sx={{
            ".MuiPaginationItem-root": {
              borderColor: "#00e5ff88",
              color: "#00e5ff",
              "&.Mui-selected": {
                backgroundColor: "#00e5ff33",
              },
              "&:hover": {
                backgroundColor: "#00e5ff22",
              },
            },
          }}
        />
      </Box>

      {/* 🖱️ CursorTrail */}
      <CursorTrail />
    </Box>
  );
};

export default Projects;
