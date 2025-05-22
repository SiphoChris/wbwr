import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";
import type { videoContextType } from "../types";

const HeroVideoContext = createContext<videoContextType | null>(null);

type ProviderProps = {
  children: ReactNode;
};

function HeroVideoProvider({ children }: ProviderProps): JSX.Element {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <HeroVideoContext.Provider value={{ videoLoaded, setVideoLoaded }}>
      {children}
    </HeroVideoContext.Provider>
  );
}

function useVideo() {
  const context = useContext(HeroVideoContext);
  if (!context) {
    throw new Error("useVideo must be used within a HeroVideoProvider");
  }
  return context;
}

export { HeroVideoProvider, useVideo };