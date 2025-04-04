import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";

export const App = () => {
    return (
        <div className="app">
            App component
            <br />
            <Link to="/">MainPage</Link>
            <Link to="about">AboutPage</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageLazy />}></Route>
                    <Route path="/about" element={<AboutPageLazy />}></Route>
                </Routes>
            </Suspense>
        </div>
    );
};
