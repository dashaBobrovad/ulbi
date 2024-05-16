import React, { FC } from "react";
import { cls } from "shared/lib/cls/cls";
import { Modal } from "shared/ui/Modal";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: ()=> void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const {
        className,
        isOpen,
        onClose,
    } = props;

    return (
        <Modal
            className={cls("", {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy // for autofocus & smaller bundle
        >
            <LoginForm />
        </Modal>
    );
};
