import React, { FC } from "react";
import { cls } from "shared/lib/cls/cls";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";
import { Input } from "shared/ui/Input";
import cx from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={cls(cx.LoginForm, {}, [className])}>
            <Input className={cx.input} placeholder={t("username")} autoFocus />
            <Input className={cx.input} placeholder={t("password")} />
            <Button className={cx.loginBtn}>
                { t("auth") }
            </Button>
        </div>
    );
};
