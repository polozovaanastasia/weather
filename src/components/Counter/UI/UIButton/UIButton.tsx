import { classNames } from "../../../../utils/classNames";
import * as cls from "./UIButton.module.scss";

export enum UIButtonType {
    PRIMARY = "primary",
    OUTLINE = "outline",
    ROUND = "round",
}

export enum UIButtonSize {
    LG = "lg",
    MD = "md",
    S = "s",
}

type UIButtonProps = {
    type?: UIButtonType;
    size?: UIButtonSize;
    className?: string;
    children: React.ReactNode;
    onClick: () => void;
};

export const UIButton = ({
    type = UIButtonType.PRIMARY,
    size = UIButtonSize.MD,
    className,
    children,
    onClick,
}: UIButtonProps) => {
    const UIButtonClasses = classNames(cls.UIButton, {}, [
        className,
        cls[`type-${type}`],
        cls[`size-${size}`],
    ]);

    return (
        <button className={UIButtonClasses} onClick={onClick}>
            {children}
        </button>
    );
};
