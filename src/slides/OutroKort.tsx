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
      <Typography variant="h1" component="div" color="pink">
        Takk for meg!
      </Typography>

      <img
        src="src/public/images/junkTakk.png"
        alt="create store"
        style={{ maxHeight: "50%" }}
      />
    </Stack>
  );
};
