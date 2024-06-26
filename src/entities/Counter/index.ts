import { Counter } from "./ui/Counter";
import type { CounterSchema } from "./modal/types/counterSchema";
import { counterReducer, counterActions } from "./modal/slice/counterSlice";

export {
    Counter,
    CounterSchema,
    counterReducer,
    counterActions,
};
