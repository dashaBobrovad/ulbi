import React, { FC } from "react";
import { cls } from "shared/lib/cls/cls";
import { Link, LinkProps } from "react-router-dom";
import cx from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={cls(cx.applink, {}, [cx[theme], className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
