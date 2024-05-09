import React, { FC, useState } from "react";
import { cls } from "shared/lib/cls/cls";
import { Modal } from "shared/ui/Modal";
import { Button, ButtonTheme } from "shared/ui/Button";
import { useTranslation } from "react-i18next";
import cx from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const onToggleModal = () => {
        setIsAuthOpen((prev) => !prev);
    };

    return (
        <div className={cls(cx.navbar, {}, [className])}>
            <div className={cx.links}>
                <Button
                    onClick={onToggleModal}
                    theme={ButtonTheme.CLEAR_INVERTED}
                >
                    {t("auth")}
                </Button>
            </div>
            <Modal isOpen={isAuthOpen} onClose={onToggleModal}>Auth modal</Modal>
        </div>
    );
};
