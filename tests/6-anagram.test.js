const anagram = require('../exercises/6-anagram');

describe('anagram', () => {
    test('should return true if two strings are an anagram (exact number of the same characters)', () => {
        expect(anagram('Diogo', 'Godoi')).toBe(true);
        expect(anagram('Daniel', 'Nascimento')).toBe(false);
        expect(anagram('Dormitory', 'Dirty Room')).toBe(true);
        expect(anagram('#Elvis', 'Lives!')).toBe(true);
        expect(anagram('The Morse Code', 'hErE CoMe DoTs!!')).toBe(true);
        expect(anagram('pao do padeiro', 'pado do mercardo')).toBe(false);
        expect(anagram('Dude!Dude!', 'eduD! u!ded')).toBe(true);
    });
});