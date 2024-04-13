import React, { Suspense } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import AboutPageLazy from "./pages/AboutPage/AboutPage.lazy";
import MainPageLazy from "./pages/MainPage/MainPage.lazy";
import "./index.scss";

const App = () => {
    return (
        <div className="app">
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
