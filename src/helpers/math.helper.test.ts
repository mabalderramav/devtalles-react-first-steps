import {describe, expect, test} from "vitest";
import {Add, Divide, Multiply, Subtract} from "./math.helper.ts";

describe("Add", () => {
    test("Should Add two positive number", () => {
        // Arrange
        const a = 2;
        const b = 3;
        // Act
        const result = Add(a, b);
        // Assertion
        expect(result).toBe(a + b);
    });
    test("Should Add two negative number", () => {
        // Arrange
        const a = -2;
        const b = -3;
        // Act
        const result = Add(a, b);
        // Assert
        expect(result).toBe(a + b);
    });
});

describe("Subtract", () => {
    test("Should Subtract two positive number", () => {
        // Arrange
        const a = 2;
        const b = 3;
        // Act
        const result = Subtract(a, b);
        // Assert
        expect(result).toBe(a - b);
    });
    test("Should Subtract two negative number", () => {
        // Arrange
        const a = -2;
        const b = -3;
        // Act
        const result = Subtract(a, b);
        // Assert
        expect(result).toBe(a - b);
    });
});

describe("Multiply", () => {
    test("Should Multiply two positive number", () => {
        // Arrange
        const a = 2.5;
        const b = 3;
        // Act
        const result = Multiply(a, b);
        // Assert
        expect(result).toBe(a * b);
    });
    test("Should Multiply two negative number", () => {
        // Arrange
        const a = -2;
        const b = -3;
        // Act
        const result = Multiply(a, b);
        // Assert
        expect(result).toBe(a * b);
    });
});

describe("Divide", () => {
    test("Should Divide two positive number", () => {
        // Arrange
        const a = 6;
        const b = 3;
        // Act
        const result = Divide(a, b);
        // Assert
        expect(result).toBe(a / b);
    });
})
