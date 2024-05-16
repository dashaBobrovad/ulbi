import React, { FC } from "react";
import { cls } from "shared/lib/cls/cls";
import cx from "./Loader.module.scss";

interface LoaderProps {
    className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => (
    <div className={cls(cx.Loader, {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
