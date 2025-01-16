import { Stack, Typography } from "@mui/material";
import CardContainer from "./CardContainer";
import { SlideControl } from "./SlideControl";
import { useStore } from "./store";

function App() {
  const slide = useStore((state) => state.slide);

  return (
    <>
      <Stack direction="row">
        <Stack direction="column">
          <CardContainer />
          <SlideControl />
        </Stack>
        {slide > 0 && (
          <Stack direction="column">
            <Typography variant="h3" component="div" color="pink">
              Zustand
            </Typography>
            <Typography variant="body2">
              Et alternativ mellom context og redux
            </Typography>
          </Stack>
        )}
      </Stack>
    </>
  );
}

export default App;
