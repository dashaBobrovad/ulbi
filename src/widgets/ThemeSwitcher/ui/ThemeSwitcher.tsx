import React, { FC } from "react";
import { cls } from "shared/lib/cls";
import { useTheme, Theme } from "app/providers/ThemeProvider";
import DarkThemeIcon from "shared/assets/icons/theme-dark.svg";
import LightThemeIcon from "shared/assets/icons/theme-light.svg";
import { Button, ThemeButton } from "shared/ui/Button";
import cx from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={cls(cx.themeswitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {
        theme === Theme.LIGHT ? <LightThemeIcon /> : <DarkThemeIcon />
      }


    </Button>
  )
};
