import { screen, fireEvent } from "@testing-library/react";
import { renderWithTranslationForTest } from "shared/lib/renderWithTranslationForTest/renderWithTranslationForTest";
import { Sidebar } from "widgets/Sidebar";

describe("Sidebar test", () => {
    test("Sidebar render", () => {
        renderWithTranslationForTest(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("Sidebar btn click", () => {
        renderWithTranslationForTest(<Sidebar />);
        const self = screen.getByTestId("sidebar");
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        fireEvent.click(toggleBtn);
        expect(self).toHaveClass("collapsed");
        fireEvent.click(toggleBtn);
        expect(self).not.toHaveClass("collapsed");
    });
});
