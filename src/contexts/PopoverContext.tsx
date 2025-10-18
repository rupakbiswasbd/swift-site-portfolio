/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, ReactNode } from "react";

interface PopoverContextType {
  isPopoverOpen: boolean;
  setIsPopoverOpen: (open: boolean) => void;
}

const PopoverContext = createContext<PopoverContextType | undefined>(undefined);

export const PopoverProvider = ({ children }: { children: ReactNode }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <PopoverContext.Provider value={{ isPopoverOpen, setIsPopoverOpen }}>
      {children}
    </PopoverContext.Provider>
  );
};

export const usePopover = () => {
  const context = useContext(PopoverContext);
  if (context === undefined) {
    throw new Error("usePopover must be used within a PopoverProvider");
  }
  return context;
};
