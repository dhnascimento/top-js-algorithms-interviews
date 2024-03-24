//Returns the number of vowels in a string

function numOfVowels(string) {
    const vowelsMap = 'aeiou'.split('');
    const lowerString = string.toLowerCase();
    let count = 0;

    for (let char of lowerString) {
        if (vowelsMap.includes(char)) {
            count++;
        }
    }

    return count;
}

module.exports = numOfVowels;