import React, {
    FC, ReactNode, MouseEvent, useState,
    useRef,
    useEffect,
    useCallback,
} from "react";
import { cls } from "shared/lib/cls/cls";
import { Portal } from "shared/ui/Portal";
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

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", onKeyDown);
            clearTimeout(timerRef.current);
        };
    }, [onKeyDown, isOpen]);

    const mods = {
        [cx.opened]: isOpen,
        [cx.isClosing]: isClosing,
    };

    return (
        <Portal>
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
        </Portal>
    );
};
