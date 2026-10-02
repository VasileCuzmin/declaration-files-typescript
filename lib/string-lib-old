export class StringLib {
    public static readonly version = "1.0.0";

    private static suffixes: Map<string, string> = new Map([
        ["1", "st"],
        ["2", "nd"],
        ["3", "rd"]
    ]);

    public static ordinalize(ordinal: number | string): string {
        const o = '' + ordinal;

        if (!o || !parseInt(o, 10)) {
            return '';
        }

        const last = o.at(-1) ?? '';
        return o + (this.suffixes.get(last) ?? 'th');
    }
}