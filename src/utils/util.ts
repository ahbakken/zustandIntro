import { useStore } from "../store/store";

export const logSlide = () => {
  const slide = useStore.getState().slide;
  console.log("Slide:", slide);
};
