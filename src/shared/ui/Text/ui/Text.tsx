import React, { FC } from "react";
import { cls } from "shared/lib/cls/cls";
import cx from "./Text.module.scss";

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
}

export const Text: FC<TextProps> = (props) => {
    const {
        className,
        title,
        text
    } = props;

    return (
        <div className={cls(cx.Text, {}, [className])}>
            <div>{title}</div>
            <div>{text}</div>
        </div>
    );
};
