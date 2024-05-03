import React, { Suspense } from "react";
import { cls } from "shared/lib/cls/cls";
import { useTheme } from "app/providers/ThemeProvider";
import { Navbar } from "widgets/Navbar";
import "app/styles/index.scss";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "app/providers/router/AppRouter";

const App = () => {
    const { theme } = useTheme();

    console.log("----------------------------")
    const incr = () => {
        let counter = 0;
        return () => (counter +=1)
    }

    console.log(incr()())
    console.log(incr()())
    console.log(incr()())
    console.log("----------------------------")
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
    );
};

export default App;
