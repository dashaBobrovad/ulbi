import React, { FC } from "react";
import { cls } from "shared/lib/cls/cls";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button";
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
            <Button onClick={reload} theme={ThemeButton.OUTLINE}>
                { t("Перезагрузить страницу") }
            </Button>
        </div>
    );
};
