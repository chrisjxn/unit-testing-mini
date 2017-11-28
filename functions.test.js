const functions = require('./functions');

test('returnTwo() should return 2', () => {
    // Arrange

    // Action
    let result = functions.returnTwo();

    // Assert
    expect(result).toEqual(2);
})

describe('greeting function', () => {

    test('greets James with Hello, James.', () => {
        // Arrange
        let name = 'James';

        // Action
        let result = functions.greeting(name);

        // Assert
        expect(result).toBe('Hello, James.');
    })

    test('greets Jill with Hello, Jill.', () => {
        // Arrange
        let name = 'Jill';

        // Action
        let result = functions.greeting(name);

        // Assert
        expect(result).toBe('Hello, Jill.');
    })
})

describe('math functions', () => {
    describe('add function', () => {

        test('add(1, 2) returns 3', () => {
            // Arrange
            let num1 = 1;
            let num2 = 2;

            // Action
            let result = functions.add(num1, num2);

            // Assert
            expect(result).toBe(3);
        })

        test('add(5, 9) returns 14', () => {
            // Arrange
            let num1 = 5;
            let num2 = 9;

            // Action
            let result = functions.add(num1, num2);

            // Assert
            expect(result).toBe(14);
        })
    })

    describe('multiply function', () => {

        test('multiply(1, 2) returns 2', () => {
            // Arrange
            let num1 = 1;
            let num2 = 2;

            // Action
            let result = functions.multiply(num1, num2);

            // Assert
            expect(result).toBe(2);
        })

        test('multiply(5, 9) returns 45', () => {
            // Arrange
            let num1 = 5;
            let num2 = 9;

            // Action
            let result = functions.multiply(num1, num2);

            // Assert
            expect(result).toBe(45);
        })
    })

    describe('divide function', () => {

        test('divide(2, 2) returns 1', () => {
            // Arrange
            let num1 = 2;
            let num2 = 2;

            // Action
            let result = functions.divide(num1, num2);

            // Assert
            expect(result).toBe(1);
        })

        test('divide(45, 9) returns 5', () => {
            // Arrange
            let num1 = 45;
            let num2 = 9;

            // Action
            let result = functions.divide(num1, num2);

            // Assert
            expect(result).toBe(5);
        })
    })

    describe('subtract function', () => {

        test('subtract(1, 2) returns -1', () => {
            // Arrange
            let num1 = 1;
            let num2 = 2;

            // Action
            let result = functions.subtract(num1, num2);

            // Assert
            expect(result).toBe(-1);
        })

        test('subtract(5, 9) returns -4', () => {
            // Arrange
            let num1 = 5;
            let num2 = 9;

            // Action
            let result = functions.subtract(num1, num2);

            // Assert
            expect(result).toBe(-4);
        })
    })
})

