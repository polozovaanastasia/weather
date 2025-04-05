import { createContext } from "react";

export enum Themes {
    DARK = "dark",
    LIGHT = "light",
}

type ThemeContextType = {
    theme: Themes;
    setTheme: (theme: Themes) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: Themes.LIGHT,
    setTheme: () => {},
});
