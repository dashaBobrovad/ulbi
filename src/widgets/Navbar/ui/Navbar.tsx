import React, { FC } from "react";
import { cls } from "shared/lib/cls/cls";
import { useTheme, Theme } from "app/providers/ThemeProvider";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { useTranslation } from "react-i18next";
import cx from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
    <div className={cls(cx.navbar, {}, [className])}> </div>
);
