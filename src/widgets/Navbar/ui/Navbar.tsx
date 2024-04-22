import React, { FC } from "react";
import { cls } from "shared/lib/cls/cls";
import { useTheme, Theme } from "app/providers/ThemeProvider";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { useTranslation } from "react-i18next";
import cx from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    const linkTheme = theme === Theme.LIGHT
        ? AppLinkTheme.PRIMARY
        : AppLinkTheme.SECONDARY;

    return (
        <div className={cls(cx.navbar, {}, [className])}>
            <div className={cx.links}>
                <AppLink to="/" className={cx.mainLink} theme={linkTheme}>{t("main").toUpperCase()}</AppLink>
                <AppLink to="/about" theme={linkTheme}>{t("about us").toUpperCase()}</AppLink>
            </div>
        </div>
    );
};
