const reverseString = require('../exercises/1-reverse-string');

test('reverseString reverses strings properly', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('hi')).toBe('ih')
    expect(reverseString('abba')).toBe('abba');
    expect(reverseString('DanielNascimento')).toBe('otnemicsaNleinaD');
});