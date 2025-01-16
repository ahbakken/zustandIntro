import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useStore } from "./store/store";
import { OrdForklaring } from "./slides/OrdForklaring";
import { CreateStore } from "./slides/CreateStore";
import { CreateStoreUser } from "./slides/CreateStoreUser";
import { UsingStore } from "./slides/UsingStore";
import { UsingStoreForklaring } from "./slides/UsingStoreForklaring";
import { UsingStoreInUtil } from "./slides/UsingStoreInUtil";
import { Sources } from "./slides/Sources";
import { OutroKort } from "./slides/OutroKort";
import { IntroKort } from "./slides/IntroKort";
import { UsingStoreAsync } from "./slides/UsingStoreAsync";
import { CompareRedux } from "./slides/CompareRedux";
import { CompareContext } from "./slides/CompareContext";
import { CompareConclution } from "./slides/CompareConclution";

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
        {slide === 2 && <CreateStore />}
        {slide === 3 && <CreateStoreUser />}
        {slide === 4 && <UsingStore />}
        {slide === 5 && <UsingStoreForklaring />}
        {slide === 6 && <UsingStoreInUtil />}
        {slide === 7 && <UsingStoreAsync />}
        {slide === 8 && <CompareRedux />}
        {slide === 9 && <CompareContext />}
        {slide === 10 && <CompareConclution />}
        {slide === 11 && <Sources />}
        {slide === 12 && <OutroKort />}
      </CardContent>
    </Card>
  );
}
