import { Stack, Typography } from "@mui/material";
import { FC } from "react";

export const IntroKort: FC = () => {
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
        Zustand
      </Typography>
      <Typography variant="body2">
        Et alternativ mellom context og redux
      </Typography>
    </Stack>
  );
};
