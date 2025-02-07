import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import oracleLogo from "../../public/assets/oracle_logo.png";
import React from "react";
import Link from "next/link";

const navigation = () => {
  const pages = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Sectors", href: "/sectors" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 20, // Margin from the top
        left: "50%", // Center horizontally
        transform: "translateX(-50%)", // Adjust to center
        width: "90%", // Responsive width
        height: "70px",
        maxWidth: "1170px", // Maximum width
        background: "linear-gradient(90deg, #003F61 0%, #1B577A 100%)",
        boxShadow: "0px 10px 22px rgba(0, 0, 0, 0.07)", // Floating shadow
        borderRadius: 2, // Rounded corners
        zIndex: 1100, // Ensure it stays on top
      }}
    >
      <Toolbar disableGutters>
        <Box
          sx={{
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
            display: "flex",
            padding: 2,
          }}
        >
          <Box
            component="img"
            src={"../oracle.png"}
            alt="Logo"
            sx={{
              display: { xs: "none", md: "flex" },
              height: 70,
              width: 70,
            }}
          />
          <Stack spacing={4} direction={"row"}>
            {pages.map((page) => (
              <Link key={page.href} href={page.href} className="m2">
                {page.name}
              </Link>
            ))}
          </Stack>
          <Stack>
            <Button
              sx={{
                borderRadius: 2,
                color: "#fff",
                backgroundColor: "#B12D87",
              }}
            >
              Contact Us
            </Button>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default navigation;
