import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { IntroKort } from "./slides/IntroKort";
import { useStore } from "./store";
import { OrdForklaring } from "./slides/OrdForklaring";

export default function CardContainer() {
  const slide = useStore((state) => state.slide);
  return (
    <Card
      sx={{
        minWidth: 650,
        maxWidth: 650,
        m: 2,
        minHeight: 550,
        maxHeight: 550,
        color: "#fff",
        backgroundColor: "#424242",
      }}
    >
      <CardContent>
        {slide === 0 && <IntroKort />}
        {slide === 1 && <OrdForklaring />}
      </CardContent>
    </Card>
  );
}
