import { classNames } from "../../utils/classNames";
import * as cls from "./UIButton.module.scss";

export enum UIButtonType {
    PRIMARY = "primary",
    OUTLINE = "outline",
    ROUND = "round",
    ICON = "icon",
}

export enum UIButtonSize {
    LG = "lg",
    MD = "md",
    S = "s",
}

type UIButtonProps = {
    type?: UIButtonType;
    size?: UIButtonSize;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
    onClick: () => void;
};

export const UIButton = ({
    type = UIButtonType.PRIMARY,
    size = UIButtonSize.MD,
    disabled,
    className,
    children,
    onClick,
}: UIButtonProps) => {
    const UIButtonClasses = classNames(
        cls["ui-button"],
        { [cls["ui-button_disabled"]]: disabled },
        [className, cls[`type-${type}`], cls[`size-${size}`]]
    );

    return (
        <button
            className={UIButtonClasses}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
