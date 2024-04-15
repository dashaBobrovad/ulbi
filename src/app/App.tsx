import React, { Suspense } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import { cls } from "shared/lib/cls";
import { useTheme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={cls("app", {}, [theme])}>
            <div>
                <button onClick={toggleTheme}>TOGGLE THEME</button>
            </div>
            <div>
                <Link to="/">Главная</Link>
                <Link to="/about">О нас</Link>{", "}
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Suspense>

        </div>
    )
}

export default App
