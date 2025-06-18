import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Pagination,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import { motion } from "framer-motion";
import CursorTrail from "./CursorTrail";
import bgVideo from "../assets/bg-tech.mp4";

const allCerts = [
  { title: "🏆 Smart India Hackathon – Ministry of India", link: "#" },
  { title: "💻 MERN Stack Internship – Explorin", link: "#" },
  { title: "🧠 AI Tools Workshop – MIT", link: "#" },
  { title: "🐍 Python – Technoledge Eduresearch", link: "#" },
  { title: "🎵 React Spotify Clone – LetsUpgrade", link: "#" },
  { title: "🔍 SEO – Great Learning", link: "#" },
  { title: "📈 Product Management – SkillUp", link: "#" },
  { title: "🎉 Zonal Tech Fest – AKTU", link: "#" },
];

const itemsPerPage = 3;

const Certifications = () => {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(allCerts.length / itemsPerPage);

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => (document.body.style.overflowX = "auto");
  }, []);

  const handleChange = (_, value) => {
    setPage(value);
    window.scrollTo({
      top: document.getElementById("certifications").offsetTop - 100,
      behavior: "smooth",
    });
  };

  const currentCerts = allCerts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box
      id="certifications"
      sx={{
        position: "relative",
        minHeight: "100vh",
        py: 10,
        px: { xs: 2, sm: 4, md: 8 },
        color: "#fff",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
          inset: 0,
          background: "rgba(0, 0, 0, 0.4)",
          zIndex: -2,
        }}
      />

      {/* 💡 Neon Header */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
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
        🚀 Certifications & Achievements
      </Typography>

      {/* 🔊 Underline Pulse Bar */}
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

      {/* 📋 Certificate List */}
      <List sx={{ width: "100%", maxWidth: "1000px", mx: "auto" }}>
        {currentCerts.map((cert, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            <ListItemButton
              component="a"
              href={cert.link}
              target="_blank"
              sx={{
                mb: 3,
                borderRadius: "20px",
                px: 3,
                py: 2.5,
                backdropFilter: "blur(12px)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid #00e5ff22",
                boxShadow: "0 0 20px #00e5ff22",
                display: "flex",
                alignItems: "center",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  background: "rgba(0,229,255,0.08)",
                  borderColor: "#00e5ff",
                  boxShadow: "0 0 30px #00e5ff88",
                },
              }}
            >
              {/* 🔘 Icon with Number */}
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <Box
                  sx={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: "linear-gradient(to right, #00e5ff, #ff4081)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "0.85rem",
                    boxShadow: "0 0 12px #00e5ffaa",
                  }}
                >
                  {i + 1 + (page - 1) * itemsPerPage}
                </Box>
              </ListItemIcon>

              {/* ✍️ Title */}
              <ListItemText
                primary={
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      fontSize: "1.05rem",
                      letterSpacing: 1,
                      background: "linear-gradient(to right, #5ffbf1, #a17fe0)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 0 10px #00e5ff55",
                    }}
                  >
                    {cert.title}
                  </Typography>
                }
              />
            </ListItemButton>
          </motion.div>
        ))}
      </List>

      {/* 🔁 Pagination */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
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

export default Certifications;
