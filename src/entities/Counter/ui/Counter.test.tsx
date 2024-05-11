import { screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { userEvent } from "@storybook/testing-library";
import { Counter } from "./Counter";

describe("Counter test", () => {
    test("Counter render", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId("value-title")).toHaveTextContent("10");
    });
    test("Counter increment", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const incrementBtn = screen.getByTestId("increment-btn");
        userEvent.click(incrementBtn);
        expect(screen.getByTestId("value-title")).toHaveTextContent("11");
    });
    test("Counter decrement", () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const incrementBtn = screen.getByTestId("decrement-btn");
        userEvent.click(incrementBtn);
        expect(screen.getByTestId("value-title")).toHaveTextContent("9");
    });
});
