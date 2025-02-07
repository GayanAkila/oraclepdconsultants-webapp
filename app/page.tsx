import Image from "next/image";
import Navigation from "./components/navigation";
import { Box, Grid, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Stack spacing={2} sx={{ alignItems: "center", mt: 16 }}>
        <Stack
          maxWidth={"1170px"}
          width={"100%"}
          sx={{
            backgroundColor: "#fff",
            borderRadius: 2,
            margin: "0 auto",
            padding: 4,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h1" fontSize={48} sx={{ fontWeight: 400 }}>
                Oracle Project Development Consultants
              </Typography>
              <Typography variant="body1" fontSize={16}>
                Pioneering Commercial & Contract Management Consultancy. we take
                immense pride in being your trusted partner for top-notch
                quantity surveying, commercial and contract management
                consultancy services.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Image
                src="../assets/Artboard1.png"
                alt="home"
                width={500}
                height={500}
              />
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </main>
  );
}
