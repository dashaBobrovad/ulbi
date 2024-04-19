import React, { Suspense } from 'react'
import { cls } from "shared/lib/cls";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router/AppRouter";
import { Navbar } from "widgets/Navbar";
import "app/styles/index.scss";
import { Sidebar } from "widgets/Sidebar";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={cls("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App
