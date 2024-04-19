import React, { FC, useState } from "react";
import cx from "./Sidebar.module.scss";
import { cls } from "shared/lib/cls";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

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
            <button onClick={onToggle}>toggle</button>
            <div className={cx.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    )
};
