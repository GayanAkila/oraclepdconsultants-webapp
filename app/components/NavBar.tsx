import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const NavBar = () => {
  const pages = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Sectors", href: "/sectors" },
  ];

  return (
    <AppBar
      position="fixed"
      className="top-5 left-1/2 transform -translate-x-1/2 w-10/12 h-16 rounded-2xl bg-gradient-to-r from-[#003F61] to-[#1B577A] shadow-sm z-50"
    >
      <Toolbar disableGutters>
        <Box className="flex items-center justify-between w-full p-4">
          <Image
            src={require("../assets/oracle.png")}
            alt="Logo"
            width={100}
            height={100}
          />
          <Stack spacing={4} direction={"row"}>
            {pages.map((page) => (
              <Link key={page.href} href={page.href} className="m-2 text-white">
                {page.name}
              </Link>
            ))}
          </Stack>
          <Stack>
            <Button className="rounded text-white bg-[#B12D87] hover:bg-[#A61C7D]">
              Contact Us
            </Button>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
