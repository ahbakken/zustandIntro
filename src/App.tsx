import { Stack, Typography } from "@mui/material";
import CardContainer from "./CardContainer";
import { SlideControl } from "./SlideControl";
import { useStore } from "./store/store";
import { GetAdvice } from "./GetAdvice";

function App() {
  const slide = useStore((state) => state.slide);

  return (
    <>
      <Stack direction="row">
        <Stack direction="column">
          <CardContainer />
          <SlideControl />
        </Stack>
        {slide > 0 && slide < 12 && (
          <Stack direction="column" sx={{ pt: 2 }}>
            <Typography variant="h3" color="pink">
              Zustand
            </Typography>
            <Typography variant="body2">
              Et alternativ mellom context og redux
            </Typography>
            {slide === 7 && <GetAdvice />}
          </Stack>
        )}
      </Stack>
    </>
  );
}

export default App;
