"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Sector = "transportation" | "real-estate" | "sea-land";

interface SectorContextType {
  activeSector: Sector;
  setActiveSector: (sector: Sector) => void;
}

const SectorContext = createContext<SectorContextType | undefined>(undefined);

export function SectorProvider({ children }: { children: ReactNode }) {
  const [activeSector, setActiveSector] = useState<Sector>("transportation");

  return (
    <SectorContext.Provider value={{ activeSector, setActiveSector }}>
      {children}
    </SectorContext.Provider>
  );
}

export function useSector() {
  const context = useContext(SectorContext);
  if (context === undefined) {
    throw new Error("useSector must be used within a SectorProvider");
  }
  return context;
}

