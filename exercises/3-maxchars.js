
// return the character that is the most commonly used on the string

function maxChars(string) {

    const charCount = {};

    //Remove white-space from string
    const concatString = string.replace(' ', '').toLowerCase();

    for (let char of concatString) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let commonChars = [];
    let maxCount = 0;

    for(const [char, count] of Object.entries(charCount)) {
        if (count > maxCount) {
            commonChars = [char];
            maxCount = count;
        } else if (count === maxCount) {
            commonChars = [...commonChars, char];
        }
    }

    return commonChars.length === 1 ? commonChars[0] : commonChars;

}

module.exports = maxChars;