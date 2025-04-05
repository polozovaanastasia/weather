import { useState } from "react";
import { ThemeContext, Themes } from "./themeContext";

type themeProviderProps = {
    children: React.ReactNode;
};

const defaultTheme = (localStorage.getItem("theme") as Themes) || Themes.LIGHT;

export const ThemeProvider = ({ children }: themeProviderProps) => {
    const [theme, setTheme] = useState<Themes>(defaultTheme);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
