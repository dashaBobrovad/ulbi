import React, { FC } from "react";
import { cls } from "shared/lib/cls/cls";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button";

interface LangSwitcherProps {
    className?: string;
    short?:boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className, short } = props;

    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button
            className={cls("", {}, [className])}
            onClick={toggleLang}
            theme={ButtonTheme.CLEAR}
        >
            {short ? t("lang-short") : t("lang")}
        </Button>
    );
};
