import React, {FC} from "react";
import { cls } from "shared/lib/cls";
import cx from "./AppLink.module.scss";

interface AppLinkProps {
    className?: string;
}

export const AppLink: FC<AppLinkProps> = ({ className }) => {
  return (
    <div className={cls(cx.applink, {}, [className])}>
      
    </div>
  )
};
