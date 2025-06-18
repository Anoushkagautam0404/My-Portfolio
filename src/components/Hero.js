import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bgVideo from "../assets/bg-tech.mp4";
import profileImage from "../assets/anoushka.jpg";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 3, md: 6 },
        py: { xs: 6, md: 8 },
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
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -3,
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* 🔷 Overlay */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to right, rgba(15,32,39,0.8), rgba(44,83,100,0.8))",
          zIndex: -2,
        }}
      />

      {/* 📦 Main Content */}
      <Box
        sx={{
          zIndex: 1,
          display: "flex",
          flexDirection: isMobile ? "column-reverse" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1300px",
          width: "100%",
          mx: "auto",
          gap: { xs: 4, md: 10 },
          px: { xs: 2, md: 4 },
        }}
      >
        {/* 📝 Text Block */}
        <Box sx={{ flex: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                color: "#ff9800",
                textTransform: "uppercase",
                letterSpacing: 1.5,
                fontWeight: 600,
                mb: 1,
              }}
            >
              Let’s Build Something Great
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                fontSize: isMobile ? "2.2rem" : "3.4rem",
                lineHeight: 1.2,
              }}
            >
              Hey, I'm Anoushka<br />
              A{" "}
              <Box
                component="span"
                sx={{
                  color: "#ff4081",
                  textShadow: "0 0 12px #ff408144",
                }}
              >
                Full-Stack
              </Box>{" "}
              Developer
            </Typography>

            <Typography
              sx={{
                mt: 2,
                fontSize: "1rem",
                lineHeight: 1.8,
                maxWidth: 500,
                color: "#e0f7fa",
              }}
            >
              I design and develop thoughtful, scalable digital solutions that
              blend technology with creativity.
            </Typography>

            <Stack direction="row" spacing={3} mt={4}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => handleNavigate("/about")}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  textTransform: "none",
                  borderRadius: "30px",
                  boxShadow: "0 0 15px #ff4081aa",
                }}
              >
                About Me
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={() => handleNavigate("/contact")}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  textTransform: "none",
                  borderRadius: "30px",
                  borderColor: "#00e5ff",
                  color: "#00e5ff",
                  "&:hover": {
                    backgroundColor: "#00e5ff22",
                    borderColor: "#00e5ff",
                  },
                }}
              >
                Let’s Chat
              </Button>
            </Stack>
          </motion.div>
        </Box>

        {/* 👩‍💻 Advanced Profile Frame */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* 🌟 Soft Glow Aura */}
          <Box
            sx={{
              position: "absolute",
              width: isMobile ? 300 : 400,
              height: isMobile ? 320 : 420,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(0,229,255,0.2) 0%, transparent 70%)",
              animation: "pulseGlow 6s ease-in-out infinite",
              zIndex: 0,
              "@keyframes pulseGlow": {
                "0%": { transform: "scale(1)", opacity: 0.4 },
                "50%": { transform: "scale(1.1)", opacity: 0.6 },
                "100%": { transform: "scale(1)", opacity: 0.4 },
              },
            }}
          />

          {/* 🖼️ Image with Glow Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 1 }}
            style={{
              width: isMobile ? 240 : 320,
              height: isMobile ? 280 : 360,
              position: "relative",
              borderRadius: "20px",
              overflow: "hidden",
              background: "linear-gradient(135deg, #1e1e2f, #2a2d45)",
              boxShadow:
                "0 0 35px rgba(0,229,255,0.3), inset 0 0 10px rgba(0,229,255,0.1)",
              zIndex: 1,
            }}
          >
            {/* 🔷 Animated Frame Glow */}
            <Box
              sx={{
                position: "absolute",
                top: -6,
                left: -6,
                right: -6,
                bottom: -6,
                borderRadius: "24px",
                background:
                  "linear-gradient(135deg, rgba(0,229,255,0.4), rgba(255,64,129,0.4))",
                zIndex: -1,
                filter: "blur(12px)",
                animation: "glowBorder 6s ease-in-out infinite",
                "@keyframes glowBorder": {
                  "0%": { opacity: 0.4, transform: "scale(1)" },
                  "50%": { opacity: 0.7, transform: "scale(1.02)" },
                  "100%": { opacity: 0.4, transform: "scale(1)" },
                },
              }}
            />

            <Box
              component="img"
              src={profileImage}
              alt="Anoushka Gautam"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(1.05) contrast(1.08)",
                transition: "transform 0.4s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            />
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
