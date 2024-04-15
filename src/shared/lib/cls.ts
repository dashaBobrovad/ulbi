type Mods = Record<string, boolean | string>

const obj: Mods = {
    "hovered": true,
    "adasd": "sadsa",

}

export function cls(cls: string, mods: Mods, additional: string[]): string {
    return [
        cls,
        ...additional,
        // same ...Object.entries(mods).filter(([key, bool]) => !!bool)[0][0]
        ...Object.entries(mods).filter(([className, bool]) => !!bool).map(([className]) => className)
    ].join(" ");
}
