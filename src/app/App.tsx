import React, { Suspense, useState } from "react";
import { cls } from "shared/lib/cls/cls";
import { useTheme } from "app/providers/ThemeProvider";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "app/providers/router/AppRouter";
import "app/styles/index.scss";
import { Modal } from "shared/ui/Modal";
import { Button } from "shared/ui/Button";

const App = () => {
    const { theme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={cls("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <Button onClick={() => setIsOpen(true)}>toggle</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>modal</Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
