import React, { FC, useState } from "react";
import cx from "./Sidebar.module.scss";
import { cls } from "shared/lib/cls";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Button } from "shared/ui/Button";
import { LangSwitcher } from "widgets/LangSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div className={cls(cx.sidebar, { [cx.collapsed]: collapsed }, [className])}>
            <Button onClick={onToggle}>toggle</Button>
            <div className={cx.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cx.lang}/>
            </div>
        </div>
    )
};
