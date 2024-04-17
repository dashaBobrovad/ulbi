import React, { FC } from "react"
import { cls } from "shared/lib/cls"
import { Link } from "react-router-dom";
import cx from "./Navbar.module.scss"

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={cls(cx.navbar, {}, [className])}>
            <div className={cx.links}>
                <Link to="/" className={cx.mainLink}>Главная</Link>
                <Link to="/about">О нас</Link>{", "}
            </div>
        </div>
    )
};
