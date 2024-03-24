const capitalize = require('../exercises/5-capitalize');

describe('capitalize', () => {
    test('should capitalize the first letter of each word in a string and return the capitalized string', () => {
        expect(capitalize('this is daniel doing some coding!')).toBe('This Is Daniel Doing Some Coding!');
        expect(capitalize('what is titlecase?')).toBe('What Is Titlecase?');
        expect(capitalize('titles of books, movies, songs, plays and other works.')).toBe('Titles Of Books, Movies, Songs, Plays And Other Works.');
    });
});