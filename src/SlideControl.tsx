import { useStore } from "./store/store";
import { Button, Stack, Typography } from "@mui/material";

export const SlideControl = () => {
  const slide = useStore((state) => state.slide);
  const nextSlide = useStore((state) => state.nextSlide);
  const previousSlide = useStore((state) => state.previousSlide);

  return (
    <>
      <Stack
        spacing={3}
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Button
          variant="contained"
          onClick={previousSlide}
          disabled={slide < 1}
        >
          Forrige
        </Button>
        <Button variant="contained" onClick={nextSlide}>
          Neste
        </Button>
        <Typography variant="body2" sx={{ color: "#fff" }}>
          Side: {slide}
        </Typography>
      </Stack>
    </>
  );
};
