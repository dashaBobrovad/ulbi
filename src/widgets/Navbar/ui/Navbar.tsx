import React, { FC, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cls } from "shared/lib/cls/cls";
import { LoginModal } from "features/AuthByUsername";
import { Button, ButtonTheme } from "shared/ui/Button";
import { useTranslation } from "react-i18next";
import { getUserAuthData, userActions } from "entities/User";
import cx from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);

    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthOpen(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthOpen(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={cls(cx.Navbar, {}, [className])}>
                <div className={cx.links}>
                    <Button
                        onClick={onLogout}
                        theme={ButtonTheme.CLEAR_INVERTED}
                    >
                        {t("Log out")}
                    </Button>
                </div>
                <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} />
            </div>
        );
    }
    return (
        <div className={cls(cx.Navbar, {}, [className])}>
            <div className={cx.links}>
                <Button
                    onClick={onShowModal}
                    theme={ButtonTheme.CLEAR_INVERTED}
                >
                    {t("auth")}
                </Button>
            </div>
            <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} />
        </div>
    );
};
