import { Stack, Typography } from "@mui/material";

export const OutroKort = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" component="div" color="pink">
        Takk for meg!
      </Typography>
      <Typography variant="body2" sx={{ pb: 2 }}>
        Zustand: Et alternativ mellom context og redux
      </Typography>
      <img
        src="src/public/images/junkTakk.png"
        alt="create store"
        style={{ maxHeight: "70%" }}
      />
      <Typography variant="body2" sx={{ pb: 2 }}>
        Zustand: Et alternativ mellom context og redux
      </Typography>
    </Stack>
  );
};
