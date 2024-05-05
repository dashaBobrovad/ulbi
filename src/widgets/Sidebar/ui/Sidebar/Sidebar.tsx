import React, { FC, useState } from "react";
import { cls } from "shared/lib/cls/cls";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { useTranslation } from "react-i18next";
import cx from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={cls(
                cx.sidebar,
                { [cx.collapsed]: collapsed },
                [className],
            )}
        >
            <Button
                className={cx.collapseBtn}
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                { collapsed ? ">" : "<" }
            </Button>
            <div className={cx.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    className={cx.lang}
                    short={collapsed}
                />
            </div>
        </div>
    );
};
