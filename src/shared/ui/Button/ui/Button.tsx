import React, { FC } from "react";
import { cls } from "shared/lib/cls/cls";
import cx from "./Button.module.scss";

export enum ThemeButton {
    CLEAR = "clear",
    OUTLINE = "outline",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted"
}

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={cls(cx.button, {}, [cx[theme], className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
