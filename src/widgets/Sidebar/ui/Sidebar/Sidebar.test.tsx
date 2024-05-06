import { screen, fireEvent } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Sidebar } from "widgets/Sidebar";

describe("Sidebar test", () => {
    test("Sidebar render", () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("Sidebar btn click", () => {
        componentRender(<Sidebar />);
        const self = screen.getByTestId("sidebar");
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        fireEvent.click(toggleBtn);
        expect(self).toHaveClass("collapsed");
        fireEvent.click(toggleBtn);
        expect(self).not.toHaveClass("collapsed");
    });
});
