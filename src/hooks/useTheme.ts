import { useContext } from "react";
import { ThemeContext, Themes } from "../theme/themeContext";

export const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;

        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return {
        theme,
        toggleTheme,
    };
};
