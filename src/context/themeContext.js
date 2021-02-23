import { createContext, useContext } from "react";

export const ThemeContext = createContext();

export const useTheme = () => {
  console.log(useContext(ThemeContext));
  return useContext(ThemeContext);
};
