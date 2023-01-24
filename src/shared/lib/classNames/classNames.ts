export type Mods = Record<string, boolean | string | undefined>;

export function classNames(
    cls: string,
    mods: Mods = {},
    addition: Array<string | undefined> = [],
): string {
    return [
        cls,
        ...addition,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([key, _]) => key),
    ].join(' ');
}
