import React, { FC } from "react";
import { cls } from "shared/lib/cls/cls";
import cx from "./Text.module.scss";

export enum TextTheme {
    PRIMARY = "primary",
    EROOR = "error",
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text: FC<TextProps> = (props) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
    } = props;

    const mods: Record<string, boolean> = {
        [cx[theme]]: true,
    };

    return (
        <div className={cls(cx.Text, mods, [className])}>
            { title && <div className={cx.title}>{title}</div> }
            { text && <div className={cx.text}>{text}</div> }
        </div>
    );
};
