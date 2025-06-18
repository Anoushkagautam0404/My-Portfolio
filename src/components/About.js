import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import bgVideo from "../assets/bg-tech.mp4";

const milestones = [
  {
    year: "2021",
    icon: "📚",
    text: "Started B.Tech in Electronics & Communication Engineering. Curious about circuits, tech, and systems.",
  },
  {
    year: "2023",
    icon: "🛠️",
    text: "Interned at Explorin as a MERN Developer. Built live dashboards and real-world applications.",
  },
  {
    year: "2025",
    icon: "🚀",
    text: "Graduated as an ECE engineer. Now building robotics + full-stack apps with a creative tech mindset.",
  },
];

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="about"
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        color: "#fff",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        py: { xs: 8, md: 12 },
      }}
    >
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -3,
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* 🔷 Overlay Layer */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to top, rgba(10,25,47,0.8), rgba(0,0,0,0.85))",
          zIndex: -2,
        }}
      />

      {/* 🔵 Glow Overlay */}
      <Box
        sx={{
          position: "absolute",
          width: "120%",
          height: "150%",
          top: "-25%",
          left: "-10%",
          background:
            "radial-gradient(circle at center, rgba(0,229,255,0.08), transparent 70%)",
          zIndex: -1,
        }}
      />

      <Container maxWidth="lg" sx={{ zIndex: 1 }}>
        {/* 🧩 Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontWeight: 900,
              mb: 3,
              fontSize: isMobile ? "2.4rem" : "3.2rem",
              background: "linear-gradient(90deg, #00e5ff, #ff4081)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: 1.2,
              textShadow: "0 0 12px #00e5ff66",
            }}
          >
            About Me
          </Typography>

          <Typography
            align="center"
            sx={{
              textTransform: "uppercase",
              color: "#b2ebf2",
              fontSize: "1rem",
              letterSpacing: 1.5,
              fontWeight: 500,
              mb: 1,
            }}
          >
            Full-Stack Developer • Tech Builder • ECE Engineer
          </Typography>

          <Typography
            align="center"
            sx={{
              maxWidth: 800,
              mx: "auto",
              fontSize: "1.05rem",
              color: "#cfd8dc",
              mb: 6,
              lineHeight: 1.9,
              fontStyle: "italic",
            }}
          >
            I’m Anoushka Gautam — an engineer who designs digital experiences that work, feel,
            and look like they belong in the future. I love blending development and imagination to make useful tech real.
          </Typography>
        </motion.div>

        {/* 🧠 Timeline Grid */}
        <Grid container spacing={4} justifyContent="center">
          {milestones.map((milestone, index) => (
            <Grid item xs={12} sm={10} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: "20px",
                    background: "rgba(20, 24, 35, 0.9)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid #00e5ff33",
                    boxShadow: "0 0 30px rgba(0,229,255,0.05)",
                    color: "#e0f7fa",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: "0 0 40px rgba(0,229,255,0.2)",
                    },
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#00e5ff",
                      mb: 1,
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    {milestone.icon} {milestone.year}
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    {milestone.text}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
