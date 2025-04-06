import DarkThemeIcon from "assets/icons/DarkThemeIcon.svg";
import LightThemeIcon from "assets/icons/LightThemeIcon.svg";
import { UIButton, UIButtonType } from "components/UIButton/UIButton";
import { useTheme } from "hooks/useTheme";
import { AboutPageLazy } from "pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "pages/MainPage/MainPage.lazy";
import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Themes } from "theme/themeContext";
import { classNames } from "utils/classNames";

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            App component
            <br />
            <Link to="/">MainPage</Link>
            <Link to="about">AboutPage</Link>
            <br />
            <UIButton type={UIButtonType.ROUND} onClick={toggleTheme}>
                {theme === Themes.LIGHT ? (
                    <DarkThemeIcon />
                ) : (
                    <LightThemeIcon />
                )}
            </UIButton>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageLazy />}></Route>
                    <Route path="/about" element={<AboutPageLazy />}></Route>
                </Routes>
            </Suspense>
        </div>
    );
};
