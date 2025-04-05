import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { Themes } from "./theme/themeContext";

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            App component
            <br />
            <Link to="/">MainPage</Link>
            <Link to="about">AboutPage</Link>
            <br />
            <button onClick={toggleTheme}>
                {theme === Themes.LIGHT
                    ? "Switch to Dark Theme"
                    : "Switch to Light Theme"}
            </button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageLazy />}></Route>
                    <Route path="/about" element={<AboutPageLazy />}></Route>
                </Routes>
            </Suspense>
        </div>
    );
};
