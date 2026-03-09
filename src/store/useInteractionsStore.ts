import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface InteractionsState {
  isFirstRender: boolean;
  logoInteracted: boolean;
  setIsFirstRender: (isFirstRender: boolean) => void;
  setLogoInteracted: (interacted: boolean) => void;
}

const useInteractionsStore = create<InteractionsState>()(
  persist(
    (set) => ({
      isFirstRender: true,
      logoInteracted: false,
      setIsFirstRender: (isFirstRender: boolean) => set({ isFirstRender }),
      setLogoInteracted: (interacted: boolean) =>
        set({ logoInteracted: interacted }),
    }),
    {
      name: "dvch-interactions-storage",
      version: 1,
    },
  ),
);

export default useInteractionsStore;
