import React, { FC } from "react";
import { cls } from "shared/lib/cls";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTheme } from "app/providers/ThemeProvider";
import cx from "./Navbar.module.scss";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

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
            <div className={cx.links}>
                <AppLink to="/" className={cx.mainLink} theme={linkTheme}>Главная</AppLink>
                <AppLink to="/about" theme={linkTheme}>О нас</AppLink>
            </div>
        </div>
    )
};
