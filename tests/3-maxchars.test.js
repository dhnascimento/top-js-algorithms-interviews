const maxChars = require('../exercises/3-maxchars');

describe('maxChars', () => {
    test('returns the character that appears the most in string', () => {
        expect(maxChars('aabbccddc')).toBe('c');
        expect(maxChars('Daniel Nascimento')).toBe('n');
        expect(maxChars('apple 12321 121311')).toBe('1');
        expect(maxChars('aabbccdd')).toEqual(['a', 'b', 'c', 'd']);
        expect(maxChars('abcdefghi')).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);
    });
});
