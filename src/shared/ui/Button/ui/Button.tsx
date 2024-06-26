import React, { FC } from "react";
import { cls } from "shared/lib/cls/cls";
import cx from "./Button.module.scss";

export enum ButtonTheme {
    CLEAR = "clear",
    CLEAR_INVERTED = "clearInverted",
    OUTLINE = "outline",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
}

export enum ButtonSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cx[theme]]: true,
        [cx.square]: square,
        [cx[size]]: true,
        [cx.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={cls(cx.Button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
