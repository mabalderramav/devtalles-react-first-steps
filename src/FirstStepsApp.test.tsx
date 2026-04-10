import {afterEach, describe, expect, test, vi} from "vitest";
import {render, screen} from "@testing-library/react";
import {FirstStepsApp} from "./FirstStepsApp";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockItemCounter = vi.fn((_props: unknown) => {
    return (<div data-testid="item-counter"/>)
});

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props),
}));

describe("FirstStepsApp", () => {
    // Reset mock before each test.
    afterEach(() => {
        mockItemCounter.mockClear();
    });

    test("Should render the correct of ItemCounter component", () => {
        // Arrange
        const countExpected = 4;
        render(<FirstStepsApp/>)

        // Act
        const itemCounters = screen.getAllByTestId('item-counter');
        const countActual = itemCounters.length;

        // Assert
        expect(countActual).toBe(countExpected);
    });

    test("Should render the correct name and quantity in ItemCounter component", () => {
        // Arrange
        const itemCounterCalledTimesExpected = 4;
        render(<FirstStepsApp/>)

        // Assert
        expect(mockItemCounter, `ItemCounter should be called ${itemCounterCalledTimesExpected} times`)
            .toHaveBeenCalledTimes(itemCounterCalledTimesExpected);
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Nintendo switch 2',
            quantity: 1,
        });

        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Word ward craft',
            quantity: 2,
        });

        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'FIFA 2026',
            quantity: 3,
        });

        expect(mockItemCounter).toHaveBeenCalledWith({
            name: 'Super Mario 4',
            quantity: 5,
        });
    });
});