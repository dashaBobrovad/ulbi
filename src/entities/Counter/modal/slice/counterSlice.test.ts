import { counterReducer, counterActions } from "./counterSlice";
import { CounterSchema } from "../types/counterSchema";

describe("slice test", () => {
    test("counterReducer increment", () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state as CounterSchema, counterActions.increment))
            .toEqual({ value: 11 });
    });
    test("counterReducer decrement", () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state as CounterSchema, counterActions.decrement))
            .toEqual({ value: 9 });
    });
    test("counterReducer with empty state", () => { // initialState
        expect(counterReducer(undefined, counterActions.increment))
            .toEqual({ value: 1 });
    });
});
