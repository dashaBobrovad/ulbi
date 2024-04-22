import { cls } from "./cls";

describe("cls", () => {
    test("empty", () => {
        expect(cls("", {}, []))
            .toBe("");
    });
    test("cls creater only with cls", () => {
        expect(cls("className", {}, []))
            .toBe("className");
    });
    test("cls creater only with mod", () => {
        expect(cls("", { mod: true }, []))
            .toBe("mod");
    });
    test("cls creater only with arr of classNames", () => {
        expect(cls("", {}, ["className1", "className2"]))
            .toBe("className1 className2");
    });
    test("cls creater with all args", () => {
        expect(cls("className", { mod: true }, ["className1", "className2"]))
            .toBe("className className1 className2 mod");
    });
});
