import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useStore } from "./store/store";
import { OrdForklaring } from "./slides/02OrdForklaring";
import { CreateStore } from "./slides/03CreateStore";
import { CreateStoreUser } from "./slides/04CreateStoreUser";
import { UsingStore } from "./slides/05UsingStore";
import { UsingStoreForklaring } from "./slides/06UsingStoreForklaring";
import { UsingStoreInUtil } from "./slides/07UsingStoreInUtil";
import { Sources } from "./slides/Sources";
import { OutroKort } from "./slides/OutroKort";
import { IntroKort } from "./slides/01IntroKort";
import { UsingStoreAsync } from "./slides/08UsingStoreAsync";
import { CompareRedux } from "./slides/09CompareRedux";
import { CompareContext } from "./slides/10CompareContext";
import { CompareConclution } from "./slides/11CompareConclution";

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
