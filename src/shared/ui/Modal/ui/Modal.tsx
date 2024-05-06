import React, { FC, ReactNode, MouseEvent, useState } from "react";
import { cls } from "shared/lib/cls/cls";
import cx from "./Modal.module.scss";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: ()=> void;
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);

    const closeHandler = () => {
        if (onClose) {
            onClose();
        }
    };

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const mods = {
        [cx.opened]: isOpen,
    };

    return (
        <div className={cls(cx.modal, mods, [className])}>
            <div
                className={cx.overlay}
                onClick={closeHandler}
            >
                <div
                    className={cx.content}
                    onClick={onContentClick}
                >
                    { children }
                </div>
            </div>
        </div>
    );
};
