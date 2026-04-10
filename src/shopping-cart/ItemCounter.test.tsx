import {describe, expect, test} from "vitest";
import {fireEvent, render, screen} from "@testing-library/react";
import {ItemCounter} from "./ItemCounter.tsx";

describe("ItemCounter", () => {
    test("Should render with default values", () => {
        // Arrange
        const nameExpected = "Cars test";
        const quantityByDefaultExpected = 1;
        render(<ItemCounter name={nameExpected}/>);

        // Act
        const nameActual = screen.getByText(nameExpected).textContent.trim();
        const quantityByDefaultActual: number =
            parseInt(screen.getByText(quantityByDefaultExpected.toString()).textContent);

        // Assert
        expect(nameActual, `Name should be defined`).toBeDefined();
        expect(nameActual, `Name should match expected value`).toBe(nameExpected);
        expect(quantityByDefaultActual, `Quantity should match expected value`).toBe(quantityByDefaultExpected);
    });

    test("Should render with custom quantity", () => {
        // Arrange
        const nameExpected = "Cars test";
        const quantityExpected = 5;
        render(<ItemCounter name={nameExpected} quantity={quantityExpected}/>);

        // Act
        const nameActual = screen.getByText(nameExpected).textContent.trim();
        const quantityActual: number =
            parseInt(screen.getByText(quantityExpected.toString()).textContent);

        // Assert
        expect(nameActual, `Name should be defined`).toBeDefined();
        expect(nameActual, `Name should match expected value`).toBe(nameExpected);
        expect(quantityActual, `Quantity should match expected value`).toBe(quantityExpected);
    });

    test("Should increase count +1 when button is clicked", () => {
        // Arrange
        const nameExpected = "Cars test";
        const quantity = 5;
        const quantityExpected = quantity + 1;
        render(<ItemCounter name={nameExpected} quantity={quantity}/>);

        // Act
        const [addButton] = screen.getAllByRole('button');
        fireEvent.click(addButton);
        const quantityActual: number =
            parseInt(screen.getByText((quantityExpected).toString()).textContent);

        // Assert
        expect(quantityActual, `Quantity should increase by 1 when button is clicked`).toBe(quantityExpected);
    });

    test("Should decrease count -1 when button is clicked", () => {
        // Arrange
        const nameExpected = "Cars test";
        const quantity = 5;
        const quantityExpected = quantity - 1;
        render(<ItemCounter name={nameExpected} quantity={quantity}/>);

        // Act
        const [, subtractButton] = screen.getAllByRole('button');
        fireEvent.click(subtractButton);
        const quantityActual: number =
            parseInt(screen.getByText((quantityExpected).toString()).textContent);

        // Assert
        expect(quantityActual, `Quantity should decrease by 1 when button is clicked`).toBe(quantityExpected);
    });

    test("Should not decrease count -1 when button is clicked and quantity is 1", () => {
        // Arrange
        const nameExpected = "Cars test";
        const quantity = 1;
        const quantityExpected = quantity;
        render(<ItemCounter name={nameExpected} quantity={quantity}/>);

        // Act
        const [, subtractButton] = screen.getAllByRole('button');
        fireEvent.click(subtractButton);
        const quantityActual: number =
            parseInt(screen.getByText((quantityExpected).toString()).textContent);

        // Assert
        expect(quantityActual, `Quantity should not decrease when quantity is 1`).toBe(quantityExpected);
    });

    test("Should change to red when quantity is 1", () => {
        // Arrange
        const nameExpected = "Cars test";
        const quantity = 2;
        const colorExpected = 'red';
        render(<ItemCounter name={nameExpected} quantity={quantity}/>);

        // Act
        const [, subtractButton] = screen.getAllByRole('button');
        fireEvent.click(subtractButton);
        const itemText = screen.getByText(nameExpected);
        const colorActual = itemText.style.color;

        // Assert
        expect(colorActual, `Color should be red when quantity is 1`).toBe(colorExpected);
    });
});