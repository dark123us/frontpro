type Mods = Record<string, boolean | string>

export function classNames(
    cls: string,
    mods: Mods = {},
    addition: string[] = [],
): string {
    return [
        cls,
        ...addition,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([key, _]) => key),

    ].join(' ');
}
