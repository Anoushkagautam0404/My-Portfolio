import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Snackbar,
  Alert,
  useTheme,
  useMediaQuery,
  Stack,
  Divider,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import CursorTrail from "./CursorTrail";
import bgVideo from "../assets/bg-tech.mp4";
import DownloadIcon from "@mui/icons-material/Download";

const Resume = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const downloadResume = () => {
    setOpen(true);
  };

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => (document.body.style.overflowX = "auto");
  }, []);

  return (
    <Box
      id="resume"
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        px: { xs: 3, md: 6 },
        py: { xs: 8, md: 10 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
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
          background: "linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(20,40,50,0.9))",
          zIndex: -2,
        }}
      />

      {/* 🔘 Background Soft Pulse Ring */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 300,
          height: 300,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(0,229,255,0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          zIndex: -1,
          animation: "pulse 6s infinite ease-in-out",
          "@keyframes pulse": {
            "0%": { transform: "translate(-50%, -50%) scale(1)", opacity: 0.4 },
            "50%": { transform: "translate(-50%, -50%) scale(1.1)", opacity: 0.7 },
            "100%": { transform: "translate(-50%, -50%) scale(1)", opacity: 0.4 },
          },
        }}
      />

      {/* 📄 Resume Content Container */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        sx={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
          borderRadius: "20px",
          px: isMobile ? 4 : 6,
          py: isMobile ? 4 : 6,
          textAlign: "center",
          boxShadow: "0 0 30px rgba(0,229,255,0.2)",
          border: "1px solid rgba(0,229,255,0.2)",
          maxWidth: 800,
          zIndex: 1,
        }}
      >
        {/* 💬 Title */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            fontSize: isMobile ? "2rem" : "2.6rem",
            letterSpacing: 2,
            mb: 3,
            color: "#5ffbdf",
            textShadow: "0 0 20px #00f2ff88",
          }}
        >
          📄 My Resume
        </Typography>

        <Typography
          sx={{
            fontSize: "1rem",
            color: "#b2ebf2",
            mb: 4,
            lineHeight: 1.6,
            maxWidth: 600,
            mx: "auto",
            fontStyle: "italic",
          }}
        >
          A snapshot of my journey, showcasing my technical experience, academic background, and project work.
        </Typography>

        <Divider sx={{ borderColor: "#00e5ff55", mb: 4 }} />

        {/* 🎯 Download Button */}
        <Stack justifyContent="center" direction="row" spacing={2} mb={4}>
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            href="/Anoushka_Resume.pdf"
            download
            onClick={downloadResume}
            sx={{
              px: 4,
              py: 1.4,
              borderRadius: "30px",
              borderColor: "#00e5ff",
              color: "#00e5ff",
              fontWeight: 600,
              fontSize: "1rem",
              textTransform: "none",
              boxShadow: "0 0 15px #00e5ff55",
              "&:hover": {
                backgroundColor: "#00e5ff22",
                borderColor: "#00e5ff",
                boxShadow: "0 0 25px #00e5ffaa",
              },
            }}
          >
            Download Resume
          </Button>
        </Stack>

        {/* 🔧 Extra Info Cards */}
        <Stack spacing={3} direction="column" mt={2}>
          <Paper
            elevation={3}
            sx={{
              p: 2.5,
              background: "linear-gradient(145deg, #1e1e2f, #2a2d45)",
              color: "#e0f7fa",
              border: "1px solid #00e5ff33",
              textAlign: "left",
              borderRadius: "12px",
            }}
          >
            <Typography sx={{ fontWeight: 700, mb: 1, color: "#00e5ff" }}>
              👩‍💻 Technical Summary
            </Typography>
            <Typography sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
              Experienced with full-stack web development (MERN), embedded systems, and scalable tech product delivery. Skilled in problem-solving and modern UI/UX.
            </Typography>
          </Paper>

          <Paper
            elevation={3}
            sx={{
              p: 2.5,
              background: "linear-gradient(145deg, #1e1e2f, #2a2d45)",
              color: "#e0f7fa",
              border: "1px solid #00e5ff33",
              textAlign: "left",
              borderRadius: "12px",
            }}
          >
            <Typography sx={{ fontWeight: 700, mb: 1, color: "#00e5ff" }}>
              ⚒️ Tools & Frameworks
            </Typography>
            <Typography sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
              React, Node.js, Express, MongoDB, Arduino, Figma, Firebase, REST APIs, Material-UI, Framer Motion.
            </Typography>
          </Paper>
        </Stack>

        {/* ✅ Snackbar Notification */}
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setOpen(false)}
            severity="success"
            sx={{
              backgroundColor: "#002b36",
              color: "#00e5ff",
              border: "1px solid #00e5ff55",
              boxShadow: "0 0 10px #00e5ff55",
            }}
          >
            ✅ Resume download started!
          </Alert>
        </Snackbar>
      </Box>

      <CursorTrail />
    </Box>
  );
};

export default Resume;
