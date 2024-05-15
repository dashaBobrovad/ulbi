import React, {
    FC, ReactNode, MouseEvent, useState,
    useRef,
    useEffect,
    useCallback,
} from "react";
import { cls } from "shared/lib/cls/cls";
import { Portal } from "shared/ui/Portal";
import { useTheme } from "app/providers/ThemeProvider";
import cx from "./Modal.module.scss";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: ()=> void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;

    const { theme } = useTheme();

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

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

    // if lazy=true, we doesn't mount modal into DOM before opening
    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={cls(cx.Modal, mods, [className, theme, "app_modal"])}>
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
