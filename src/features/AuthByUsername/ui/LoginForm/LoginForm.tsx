import React, { FC, memo, useCallback } from "react";
import { cls } from "shared/lib/cls/cls";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Input } from "shared/ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../modal/slice/loginSlice";
import { getLoginState } from "../../modal/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../modal/services/loginByUsername";
import cx from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string;
}

const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username,
        password,
        isLoading,
        error,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(
        () => {
            dispatch(loginByUsername({
                username,
                password,
            }));
        },
        [dispatch, password, username],
    );

    return (
        <div className={cls(cx.LoginForm, {}, [className])}>
            {
                error && <div>{error}</div>
            }
            <Input
                className={cx.input}
                placeholder={t("username")}
                autoFocus
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                className={cx.input}
                placeholder={t("password")}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cx.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                { t("auth") }
            </Button>
        </div>
    );
};

const MemoizedLoginForm = memo(LoginForm);

export { MemoizedLoginForm as LoginForm };
