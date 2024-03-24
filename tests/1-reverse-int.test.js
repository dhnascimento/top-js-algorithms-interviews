const reverseInt = require('../exercises/1-reverse-int');

describe('reverseInt', () => {
    test('reverses positive numbers', () => {
        expect(reverseInt(1234)).toBe(4321);
        expect(reverseInt(981)).toBe(189);
        expect(reverseInt(500)).toBe(5);
        expect(reverseInt(900)).toBe(9);
    });

    test('reverses negative numbers', () => {
        expect(reverseInt(-51)).toBe(-15);
        expect(reverseInt(-15)).toBe(-51);
        expect(reverseInt(-900)).toBe(-9);
    });
});


