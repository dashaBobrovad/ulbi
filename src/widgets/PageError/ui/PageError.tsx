import React, { FC } from "react";
import { cls } from "shared/lib/cls/cls";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";
import cx from "./PageError.module.scss";

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    const reload = () => {
        window.location.reload();
    };

    return (
        <div className={cls(cx.pageerror, {}, [className])}>
            <p>{ t("Произошла непредвиденная ошибка") }</p>
            <Button onClick={reload}>
                { t("Перезагрузить страницу") }
            </Button>
        </div>
    );
};
