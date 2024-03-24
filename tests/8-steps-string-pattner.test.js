const stringSteps = require('../exercises/8-steps-string-pattern');

describe('stringSteps', () => {
    test('should return the correct step pattern for n=3', () => {
        const expectedOutput = `#  \n## \n###`;
        expect(stringSteps(3)).toBe(expectedOutput);
    });

    test('should return the correct output for n=5', () => {

        const expectedOutput = `#    \n##   \n###  \n#### \n#####`

        expect(stringSteps(5)).toBe(expectedOutput);
    });

    test('should return an error message for non-positive n', () => {
        expect(stringSteps(0)).toBe('n must be positive');
        expect(stringSteps(-1)).toBe('n must be positive');
    });

});

