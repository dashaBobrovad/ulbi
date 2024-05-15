import React, { FC, useState } from "react";
import { cls } from "shared/lib/cls/cls";
import { LoginModal } from "features/AuthByUsername";
import { Button, ButtonTheme } from "shared/ui/Button";
import { useTranslation } from "react-i18next";
import cx from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const onCloseModal = () => {
        setIsAuthOpen(false);
    };

    const onShowModal = () => {
        setIsAuthOpen(true);
    };

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
