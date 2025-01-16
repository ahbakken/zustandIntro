import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

export const OrdForklaring = () => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  return (
    <>
      <Typography variant="h3" component="div" color="pink">
        zu{bull}stand
      </Typography>
      <Typography variant="body2">
        Tysk: tilstand, forfatning, situasjon, status, posisjon, stilling
      </Typography>
      <br />

      <img
        src="src/public/images/zustand-bear.jpg"
        alt="zustand bear"
        style={{ maxWidth: "100%" }}
      />
      <Typography sx={{ mt: 2 }}>
        {
          '"A small, fast, and scalable bearbones state management solution. Zustand has a comfy API based on hooks. It isn not boilerplatey or opinionated, but has enough convention to be explicit and flux-like."'
        }
      </Typography>
    </>
  );
};
