import React, { useEffect } from "react";
import { Box, Typography, Link, useTheme, useMediaQuery } from "@mui/material";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import CursorTrail from "./CursorTrail";
import bgVideo from "../assets/bg-tech.mp4";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => (document.body.style.overflowX = "auto");
  }, []);

  return (
    <Box
      id="contact"
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        px: { xs: 3, md: 6 },
        py: { xs: 8, md: 10 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
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
          inset: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -3,
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* 🔲 Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(20,30,40,0.85))",
          zIndex: -2,
        }}
      />

      {/* ✨ Contact Content */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        sx={{
          maxWidth: 700,
          zIndex: 1,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            fontSize: isMobile ? "2rem" : "2.6rem",
            mb: 2,
            letterSpacing: 2,
            color: "#5ffbdf",
            textShadow: "0 0 16px #00f2ff",
          }}
        >
          📬 Get in Touch
        </Typography>

        <Typography
          sx={{
            fontSize: "1rem",
            mb: 4,
            color: "#b2ebf2",
            maxWidth: 600,
            mx: "auto",
          }}
        >
          Whether you want to collaborate, ask a question, or just say hi — I'm always open to conversations.
        </Typography>

        <Typography
          sx={{
            fontSize: "1.1rem",
            color: "#e0f7fa",
            mb: 2,
            fontWeight: 600,
          }}
        >
          📧 Email:{" "}
          <Link
            href="mailto:anoushkagautam0404@gmail.com"
            underline="hover"
            sx={{
              color: "#00e5ff",
              fontWeight: 500,
              "&:hover": {
                textShadow: "0 0 10px #00e5ff88",
              },
            }}
          >
            anoushkagautam0404@gmail.com
          </Link>
        </Typography>

        {/* 🔗 Social Icons */}
        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "center",
            gap: 4,
            fontSize: 38,
          }}
        >
          <motion.div whileHover={{ scale: 1.2 }}>
            <Link
              href="https://linkedin.com/in/anoushka-gautam"
              target="_blank"
              sx={{ color: "#00e5ff", "&:hover": { color: "#5ffbdf" } }}
            >
              <FaLinkedin />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2 }}>
            <Link
              href="https://github.com/Anoushkagautam0404"
              target="_blank"
              sx={{ color: "#00e5ff", "&:hover": { color: "#5ffbdf" } }}
            >
              <FaGithub />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.2 }}>
            <Link
              href="mailto:anoushkagautam0404@gmail.com"
              sx={{ color: "#00e5ff", "&:hover": { color: "#5ffbdf" } }}
            >
              <FaEnvelope />
            </Link>
          </motion.div>
        </Box>
      </Box>

      <CursorTrail />
    </Box>
  );
};

export default Contact;
