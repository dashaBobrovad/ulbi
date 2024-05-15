import React, { FC } from "react";
import { cls } from "shared/lib/cls/cls";
import { Loader } from "shared/ui/Loader/ui/Loader";
import cx from "./PageLoader.module.scss";

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
    <div className={cls(cx.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
