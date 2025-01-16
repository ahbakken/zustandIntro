import { Stack, Typography } from "@mui/material";

export const OutroKort = () => {
  const textColor = "#d8f9ff";
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
      <Typography variant="h5" sx={{ pt: 2 }}>
        <a
          href="https://github.com/ahbakken/zustandIntro"
          style={{ color: textColor, paddingTop: "20px" }}
        >
          Github
        </a>
      </Typography>
    </Stack>
  );
};
