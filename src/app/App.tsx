import React from 'react'
import { cls } from "shared/lib/cls";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router/AppRouter";
import { Navbar } from "widgets/Navbar";
import "app/styles/index.scss";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={cls("app", {}, [theme])}>
            <div>
                <button onClick={toggleTheme}>TOGGLE THEME</button>
            </div>
            <Navbar />
            <AppRouter />
        </div>
    )
}

export default App
