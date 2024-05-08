import React, {
    FC, ReactNode, MouseEvent, useState,
    useRef,
} from "react";
import { cls } from "shared/lib/cls/cls";
import cx from "./Modal.module.scss";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: ()=> void;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = () => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    };

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const mods = {
        [cx.opened]: isOpen,
        [cx.isClosing]: isClosing,
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
