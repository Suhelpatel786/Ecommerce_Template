import { createContext, useContext, useState } from "react";

export const UiContext = createContext();
export const useUiContext = () => useContext(UiContext);

export const UiProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const value = {
    drawerOpen,
    setDrawerOpen,
    showSearchBox,
    setShowSearchBox,
  };
  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
};
