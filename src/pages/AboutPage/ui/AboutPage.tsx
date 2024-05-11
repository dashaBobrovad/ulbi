import { Counter } from "entities/Counter";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { cls } from "shared/lib/cls/cls";

interface AboutPageProps {
    className?: string;
}

const AboutPage: FC<AboutPageProps> = ({ className }) => {
    const { t } = useTranslation("about");

    return (
        <div className={cls("", {}, [className])}>
            {t("about us")}
            <Counter />
        </div>
    );
};

export default AboutPage;
