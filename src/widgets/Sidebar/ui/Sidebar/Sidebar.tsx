import React, { FC, useState, Fragment } from "react";
import { cls } from "shared/lib/cls/cls";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about-20-20.svg";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import cx from "./Sidebar.module.scss";

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const { theme } = useTheme();
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const linkTheme = theme === Theme.LIGHT
        ? AppLinkTheme.PRIMARY
        : AppLinkTheme.SECONDARY;

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
                {collapsed ? ">" : "<"}
            </Button>
            <div className={cx.items}>
                <AppLink
                    to={RoutePath.main}
                    className={cx.item}
                    theme={linkTheme}
                >
                    <MainIcon className={cx.icon} />
                    <span className={cx.link}>{ t("main").toUpperCase() }</span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    theme={linkTheme}
                    className={cx.item}
                >
                    <AboutIcon className={cx.icon} />
                    <span className={cx.link}>{ t("about").toUpperCase() }</span>
                </AppLink>
            </div>
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
