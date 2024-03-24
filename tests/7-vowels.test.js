const numOfVowels = require('../exercises/7-vowels');

describe('numOfVowels', () => {
    test('returns the exact number of vowels in a string', () => {
        expect(numOfVowels('Hi There!')).toBe(3);
        expect(numOfVowels('How are you?')).toBe(5);
        expect(numOfVowels('Daniel Nascimento')).toBe(7);
        expect(numOfVowels('Why?')).toBe(0);
    });
});