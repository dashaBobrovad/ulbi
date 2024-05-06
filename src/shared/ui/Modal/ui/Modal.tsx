import React, { FC, ReactNode } from "react";
import { cls } from "shared/lib/cls/cls";
import cx from "./Modal.module.scss";

interface ModalProps {
    className?: string;
    children: ReactNode;
}

export const Modal: FC<ModalProps> = (props) => {
    const { className, children } = props;

    return (
        <div className={cls(cx.modal, {}, [className])}>
            <div className={cx.overlay}>
                <div className={cx.content}>
                    { children }
                </div>
            </div>
        </div>
    );
};
