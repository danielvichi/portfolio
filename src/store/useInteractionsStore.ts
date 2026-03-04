import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface InteractionsState {
  logoInteracted: boolean;
  setLogoInteracted: (interacted: boolean) => void;
}

const useInteractionsStore = create<InteractionsState>()(
  persist(
    (set) => ({
      logoInteracted: false,
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
