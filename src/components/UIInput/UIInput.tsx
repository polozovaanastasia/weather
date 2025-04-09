import CrossIcon from "assets/icons/CrossIcon.svg";
import {
    UIButton,
    UIButtonSize,
    UIButtonType,
} from "components/UIButton/UIButton";
import { ChangeEvent } from "react";
import { classNames } from "utils/classNames";
import * as cls from "./UIInput.module.scss";

type UIInputProps = (UIInputWithClear | UIInputWithoutClear) & {
    value: string;
    placeholder?: string;
    disabled?: boolean;
    autoFocus?: boolean;
    addonLeft?: React.ReactNode;
    addonRight?: React.ReactNode;
    className?: string;
    onChange: (value: string) => void;
};

type UIInputWithClear = {
    allowClear: true;
    onClear: () => void;
};

type UIInputWithoutClear = {
    allowClear?: false;
    onClear?: never;
};

export const UIInput = ({
    value,
    placeholder,
    disabled,
    autoFocus,
    addonLeft,
    addonRight,
    allowClear,
    className,
    onClear,
    onChange,
}: UIInputProps) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };
    return (
        <div
            className={classNames(
                cls["ui-input"],
                { [cls["ui-input_disabled"]]: disabled },
                [className]
            )}
        >
            {addonLeft && (
                <div className={cls["ui-input__addon_left"]}>{addonLeft}</div>
            )}
            <input
                className={classNames(cls["ui-input__control"], {}, [])}
                value={value}
                type="text"
                placeholder={placeholder}
                disabled={disabled}
                autoFocus={autoFocus}
                onChange={onChangeHandler}
            />
            {addonRight && (
                <div className={cls["ui-input__addon_right"]}>{addonRight}</div>
            )}
            {allowClear && (
                <UIButton
                    type={UIButtonType.ICON}
                    size={UIButtonSize.S}
                    disabled={disabled}
                    onClick={onClear}
                >
                    <CrossIcon />
                </UIButton>
            )}
        </div>
    );
};
