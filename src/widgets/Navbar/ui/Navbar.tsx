import React, { FC } from "react";
import { cls } from "shared/lib/cls";
import { useTheme, Theme } from "app/providers/ThemeProvider";
import cx from "./Navbar.module.scss";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { theme } = useTheme();

    const linkTheme = theme === Theme.LIGHT
        ? AppLinkTheme.PRIMARY
        : AppLinkTheme.SECONDARY;

    return (
        <div className={cls(cx.navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cx.links}>
                <AppLink to="/" className={cx.mainLink} theme={linkTheme}>Главная</AppLink>
                <AppLink to="/about" theme={linkTheme}>О нас</AppLink>
            </div>
        </div>
    )
};
