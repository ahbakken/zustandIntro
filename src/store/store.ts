import { create } from "zustand";

interface SlideState {
  slide: number;
  nextSlide: () => void;
  previousSlide: () => void;
}

export const useStore = create<SlideState>((set) => ({
  slide: 0,
  nextSlide: () => set((state) => ({ slide: state.slide + 1 })),
  previousSlide: () => set((state) => ({ slide: state.slide - 1 })),
}));
