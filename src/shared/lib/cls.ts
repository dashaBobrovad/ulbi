enum ModsField {
    HOVERED = "hovered",
}

type Mods = Record<ModsField, boolean | string> | {};

export function cls(cls: string, mods?: Mods, additional?: string[]): string {
    return [
        cls,
        // remove all empty items from an array
        ...additional.filter(Boolean),
        // same ...Object.entries(mods).filter(([key, bool]) => !!bool)[0][0]
        ...Object.entries(mods).filter(([className, bool]) => !!bool).map(([className]) => className)
    ].join(" ");
}
