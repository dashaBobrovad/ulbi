import React, { FC } from "react";
import cx from "./Button.module.scss";
import { cls } from "shared/lib/cls";

export enum ThemeButton {
    CLEAR = "clear",
};

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
        <button className={cls(cx.button, {}, [cx[theme], className])} {...otherProps}>
            {children}
        </button>
    )
};
