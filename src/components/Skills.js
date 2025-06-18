import React, { useEffect } from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import CursorTrail from "./CursorTrail";
import bgVideo from "../assets/vecteezy_a-neon-glowing-computer-screen-security-icon_58742382.mp4";

const skills = [
  "React", "Node.js", "MongoDB", "JavaScript", "Python",
  "HTML/CSS", "Git & GitHub", "Express.js", "Figma", "Arduino",
];

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => (document.body.style.overflowX = "auto");
  }, []);

  return (
    <Box
      id="skills"
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        px: { xs: 3, md: 8 },
        py: { xs: 8, md: 10 },
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -3,
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* 🧊 Translucent Frame Container */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        sx={{
          zIndex: 1,
          width: "100%",
          maxWidth: "1100px",
          background: "rgba(15, 30, 40, 0.55)",
          backdropFilter: "blur(16px)",
          borderRadius: "20px",
          border: "2px solid rgba(0, 229, 255, 0.2)",
          boxShadow:
            "0 0 20px rgba(0,229,255,0.2), 0 0 60px rgba(0,229,255,0.1)",
          padding: isMobile ? "2rem 1.5rem" : "3rem 4rem",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* 🔷 Glow Border Pulse */}
        <Box
          sx={{
            position: "absolute",
            top: -5,
            left: -5,
            right: -5,
            bottom: -5,
            borderRadius: "20px",
            border: "2px dashed rgba(0,229,255,0.15)",
            animation: "pulseBox 6s infinite ease-in-out",
            "@keyframes pulseBox": {
              "0%": { opacity: 0.4 },
              "50%": { opacity: 0.8 },
              "100%": { opacity: 0.4 },
            },
            zIndex: -1,
          }}
        />

        {/* 💬 Title */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            fontSize: isMobile ? "2rem" : "2.6rem",
            letterSpacing: 2,
            color: "#5ffbdf",
            textShadow: "0 0 15px #00f2ff",
            mb: 5,
          }}
        >
          ⚙️ Tech Stack I Work With
        </Typography>

        {/* 🎯 Grid Skills */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: 4,
            textAlign: isMobile ? "center" : "left",
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.03 }}
            >
              <Typography
                sx={{
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  color: "#e0f7fa",
                  pl: 3,
                  position: "relative",
                  letterSpacing: 1.1,
                  textShadow: "0 0 8px #00e5ff88",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "#00e5ff",
                    boxShadow: "0 0 10px #00e5ffbb",
                    animation: "pulseDot 4s ease-in-out infinite",
                  },
                  "@keyframes pulseDot": {
                    "0%": { transform: "scale(1)", opacity: 0.4 },
                    "50%": { transform: "scale(1.2)", opacity: 1 },
                    "100%": { transform: "scale(1)", opacity: 0.4 },
                  },
                }}
              >
                {skill}
              </Typography>
            </motion.div>
          ))}
        </Box>
      </Box>

      <CursorTrail />
    </Box>
  );
};

export default Skills;
