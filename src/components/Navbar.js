import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  Box,
} from "@mui/material";
import { Menu, Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

const pages = [
  { name: "Home", path: "/", icon: "🏠" },
  { name: "About", path: "/about", icon: "👩‍💻" },
  { name: "Skills", path: "/skills", icon: "🛠️" },
  { name: "Certifications", path: "/certifications", icon: "🎓" },
  { name: "Projects", path: "/projects", icon: "💡" },
  { name: "Resume", path: "/resume", icon: "📄" },
  { name: "Contact", path: "/contact", icon: "📬" },
];

const Navbar = ({ toggleTheme, isDark }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: "rgba(0, 10, 25, 0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0,229,255,0.2)",
          boxShadow: "0 0 12px rgba(0,229,255,0.15)",
          zIndex: 999,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* 🚀 Brand */}
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              fontWeight: 900,
              letterSpacing: 2,
              color: "#00e5ff",
              textDecoration: "none",
              textShadow: "0 0 8px #00e5ff88",
            }}
          >
            ⚡ Anoushka
          </Typography>

          {isMobile ? (
            <>
              {/* 🌗 Theme + Menu for mobile */}
              <Box>
                <IconButton onClick={toggleTheme} sx={{ color: "#00e5ff" }}>
                  {isDark ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
                <IconButton
                  edge="end"
                  onClick={toggleDrawer(true)}
                  sx={{ color: "#00e5ff" }}
                >
                  <Menu />
                </IconButton>
              </Box>
            </>
          ) : (
            <>
              {/* 🧭 Desktop Nav Links */}
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                {pages.map((page, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Button
                      component={RouterLink}
                      to={page.path}
                      sx={{
                        color: "#e0f7fa",
                        fontWeight: 500,
                        textTransform: "none",
                        fontSize: "0.95rem",
                        px: 2,
                        position: "relative",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 4,
                          left: "50%",
                          width: 0,
                          height: "2px",
                          background: "#00e5ff",
                          transition: "all 0.3s ease",
                          transform: "translateX(-50%)",
                        },
                        "&:hover::after": {
                          width: "60%",
                          boxShadow: "0 0 6px #00e5ff88",
                        },
                      }}
                    >
                      {page.icon} {page.name}
                    </Button>
                  </motion.div>
                ))}
                <IconButton onClick={toggleTheme} sx={{ color: "#00e5ff" }}>
                  {isDark ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* 📱 Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            background: "#121212",
            color: "#e0f7fa",
            width: 240,
            pt: 2,
            borderLeft: "2px solid #00e5ff44",
          },
        }}
      >
        <List>
          {pages.map((page, index) => (
            <ListItem key={index} disablePadding onClick={toggleDrawer(false)}>
              <ListItemButton component={RouterLink} to={page.path}>
                <ListItemText
                  primary={`${page.icon} ${page.name}`}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    fontSize: "1rem",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
