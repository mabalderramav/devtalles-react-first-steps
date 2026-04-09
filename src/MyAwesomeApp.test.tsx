import {describe, expect, test} from "vitest";
import {render, screen} from "@testing-library/react";

import {MyAwesomeApp} from "./MyAwesomeApp";

describe("MyAwesomeApp", () => {
    test("Should render first name and lastname on the component", () => {
        // Arrange
        const { container } = render(<MyAwesomeApp/>);

        // Act
        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');
        console.log(h1?.textContent);
        console.log(h3?.textContent);

        // Assert
        expect(h1?.textContent).toContain('Miguel Aldo');
        expect(h3?.textContent).toContain('Balderrama Vaca');
    });

    test("Should render first name and lastname on the component - screen", () => {
        // Arrange
        render(<MyAwesomeApp/>);

        // Act

        const h1 = screen.getByRole('heading', { level: 1 });
        const h3 = screen.getByRole('heading', { level: 3 });

        // Assert
        expect(h1?.textContent).toContain('Miguel Aldo');
        expect(h3?.textContent).toContain('Balderrama Vaca');
    });

    test("Should match snapshot", () => {
        const { container } = render(<MyAwesomeApp/>);
        expect(container).toMatchSnapshot();
    })
});