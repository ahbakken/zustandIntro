import { create } from "zustand";

interface Advice {
  id: number;
  advice: string;
}

interface AdviceState {
  advice: Advice;
  fetchAdvice: () => void;
}

export const useAdviceStore = create<AdviceState>((set) => ({
  advice: { id: 0, advice: "" },
  fetchAdvice: async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    set({ advice: data.slip });
  },
}));
