import { cls } from "./cls";

describe("cls", () => {
    test("empty", () => {
        const expected = "";
        expect(cls("", {}, []))
            .toBe(expected);
    });
    test("only with cls", () => {
        const expected = "className";
        expect(cls("className", {}, []))
            .toBe(expected);
    });
    test("only with mod", () => {
        const expected = "mod";
        expect(cls("", { mod: true }, []))
            .toBe(expected);
    });
    test("with arr of classNames", () => {
        const expected = "className1 className2";
        expect(cls("", {}, ["className1", "className2"]))
            .toBe(expected);
    });
    test("with all args", () => {
        const expected = "className className1 className2 mod";
        expect(cls("className", { mod: true }, ["className1", "className2"]))
            .toBe(expected);
    });
    test("with false mod", () => {
        const expected = "className className1 className2";
        expect(cls("className", { mod: false }, ["className1", "className2"]))
            .toBe(expected);
    });
    test("with undefined mod", () => {
        const expected = "className className1 className2";
        expect(cls("className", { mod: undefined }, ["className1", "className2"]))
            .toBe(expected);
    });
});
