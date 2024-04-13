import React, { Suspense, useContext } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import AboutPageLazy from "./pages/AboutPage/AboutPage.lazy";
import MainPageLazy from "./pages/MainPage/MainPage.lazy";
import "../src/styles/index.scss";
import { useTheme } from "./theme/useTheme";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <div>
                <button onClick={toggleTheme}>TOGGLE THEME</button>
            </div>
            <div>
                <Link to="/">Главная</Link>
                <Link to="/about">О нас</Link>{", "}
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageLazy />} />
                    <Route path="/about" element={<AboutPageLazy />} />
                </Routes>
            </Suspense>

        </div>
    )
}

export default App
