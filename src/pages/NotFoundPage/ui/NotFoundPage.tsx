import React, { FC } from "react";
import { cls } from "shared/lib/cls/cls";
import { useTranslation } from "react-i18next";
import cx from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation("notfound");

    return (
        <div className={cls(cx.notfoundpage, {}, [className])}>
            { t("Страница не найдена") }
        </div>
    );
};

export default NotFoundPage;
