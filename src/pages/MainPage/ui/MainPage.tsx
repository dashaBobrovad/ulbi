import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { cls } from "shared/lib/cls/cls";

interface MainPageProps {
    className?: string;
}

const MainPage: FC<MainPageProps> = ({ className }) => {
    const { t } = useTranslation("main");

    return (
        <div className={cls("", {}, [className])}>
            {t("main")}
        </div>
    );
};

export default MainPage;
