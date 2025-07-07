import { createContext, useState } from "react";

export const StickyNavContext = createContext();

export const StickyNavProvider = ({ children }) => {
  const [isStickyNavVisible, setIsStickyNavVisible] = useState(false);

  return (
    <StickyNavContext.Provider
      value={{ isStickyNavVisible, setIsStickyNavVisible }}
    >
      {children}
    </StickyNavContext.Provider>
  );
};
