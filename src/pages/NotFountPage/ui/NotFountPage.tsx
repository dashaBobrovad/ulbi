import React, { FC } from "react";
import { cls } from "shared/lib/cls/cls";
import { useTranslation } from "react-i18next";
import cx from "./NotFountPage.module.scss";

interface NotFountPageProps {
    className?: string;
}

export const NotFountPage: FC<NotFountPageProps> = ({ className }) => {
    const { t } = useTranslation("notfound");

    return (
        <div className={cls(cx.notfountpage, {}, [className])}>
            { t("Страница не найдена") }
        </div>
    );
};
