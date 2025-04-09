import ChevronDownIcon from "assets/icons/ChevronDownIcon.svg";
import DarkThemeIcon from "assets/icons/DarkThemeIcon.svg";
import LightThemeIcon from "assets/icons/LightThemeIcon.svg";
import SearchIcon from "assets/icons/SearchIcon.svg";
import { UIButton, UIButtonType } from "components/UIButton/UIButton";
import { UIInput } from "components/UIInput/UIInput";
import { useTheme } from "hooks/useTheme";
import { AboutPageLazy } from "pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "pages/MainPage/MainPage.lazy";
import { Suspense, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Themes } from "theme/themeContext";
import { classNames } from "utils/classNames";

export const App = () => {
    const { theme, toggleTheme } = useTheme();

    const [inputValue, setInputValue] = useState<string>("");

    const onChangeInput = (value: string) => {
        setInputValue(value);
    };

    const onClearInput = () => {
        setInputValue("");
    };

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
            <div style={{ width: "300px", margin: "15px 0" }}>
                <h3>{inputValue}</h3>
                <UIInput
                    value={inputValue}
                    onChange={onChangeInput}
                    addonLeft={<SearchIcon />}
                    addonRight={<ChevronDownIcon />}
                    allowClear
                    placeholder="Enter text..."
                    disabled
                    onClear={onClearInput}
                />
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageLazy />}></Route>
                    <Route path="/about" element={<AboutPageLazy />}></Route>
                </Routes>
            </Suspense>
        </div>
    );
};
