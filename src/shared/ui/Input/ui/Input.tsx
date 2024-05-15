import React, {
    ChangeEvent,
    FC,
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
    useState,
} from "react";
import { cls } from "shared/lib/cls/cls";
import cx from "./Input.module.scss";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
}

const Input: FC<InputProps> = (props) => {
    const {
        className,
        value,
        onChange,
        type = "text",
        placeholder = "placeholder",
        autoFocus,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>();

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autoFocus]);

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target.selectionStart || 0);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    return (
        <div className={cls(cx.InputWrapper, {}, [className])}>
            { placeholder && (
                <div className={cx.placeholder}>
                    { `${placeholder}>` }
                </div>
            )}
            <div className={cx.caretWrapper}>
                <input
                    className={cx.Input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    ref={ref}
                    {...otherProps}
                />
                {
                    isFocused && (
                        <span
                            className={cx.caret}
                            style={{ left: `${caretPosition * 9}px` }}
                        />
                    )
                }
            </div>
        </div>
    );
};

const MemoizedInput = memo(Input);

export { MemoizedInput as Input };
