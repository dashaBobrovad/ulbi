import React, {FC} from "react"
import cx from "./AppLink.module.scss"
import { cls } from "shared/lib/cls"

interface AppLinkProps {
    className?: string;
}

export const AppLink: FC<AppLinkProps> = ({ className }) => {
  return (
    <div className={cls(cx.applink, {}, [className])}>
      
    </div>
  )
};
