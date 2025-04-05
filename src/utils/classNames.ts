type ModsType = Record<string, boolean>;

export const classNames = (
    className: string,
    mods: ModsType,
    additional: Array<string>
) => {
    return [
        className,
        ...Object.entries(mods)
            .filter(([_, flag]) => flag)
            .map(([clsn, _]) => clsn),
        ...additional,
    ].join(" ");
};
