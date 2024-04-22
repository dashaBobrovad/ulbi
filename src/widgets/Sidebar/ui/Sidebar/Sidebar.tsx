import React, { FC, useState } from "react";
import { cls } from "shared/lib/cls/cls";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Button } from "shared/ui/Button";
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
        <div className={cls(cx.sidebar, { [cx.collapsed]: collapsed }, [className])}>
            <Button onClick={onToggle}>{t("toggle")}</Button>
            <div className={cx.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cx.lang} />
            </div>
        </div>
    );
};
