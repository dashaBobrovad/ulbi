import React, { FC } from "react";
import { cls } from "shared/lib/cls/cls";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";
import cx from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={cls(cx.LoginForm, {}, [className])}>
            <input className={cx.input} type="text" />
            <input className={cx.input} type="text" />
            <Button className={cx.loginBtn}>
                { t("auth") }
            </Button>
        </div>
    );
};
