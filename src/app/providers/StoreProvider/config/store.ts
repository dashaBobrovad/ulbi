import { configureStore } from "@reduxjs/toolkit";
import { StateSChema } from "./StateSchema";

export function createReduxStore(initialState?: StateSChema) {
    return configureStore<StateSChema>({
        reducer: { },
        devTools: __IS_DEV__,
    });
}

export const store = createReduxStore();
