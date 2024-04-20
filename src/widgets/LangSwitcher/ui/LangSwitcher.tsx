import React, { FC } from 'react';
import { cls } from 'shared/lib/cls';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button';
import cx from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={cls(cx.langswitcher, {}, [className])}
            onClick={toggleLang}
            theme={ThemeButton.CLEAR}
        >
            {t('lang')}
        </Button>
    );
};
