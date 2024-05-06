import React, { Suspense } from "react";
import { cls } from "shared/lib/cls/cls";
import { useTheme } from "app/providers/ThemeProvider";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "app/providers/router/AppRouter";
import "app/styles/index.scss";
import { Modal } from "shared/ui/Modal";

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={cls("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <Modal>Modal</Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
