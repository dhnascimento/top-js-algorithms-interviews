// Check if 2 strings are anagrams

function anagram(stringOne, stringTwo) {
    // Option #1 - Custom function to remove special characters
    const prepareString = (string) => {
        const lower = string.toLowerCase();
        let preparedString = "";
        const specialChars = "!@#$%^&*()+=-_'\|/[]\":;?><* ".split('');

        for (let i = 0; i < lower.length; i++) {
            if (!specialChars.includes(lower[i])) {
                preparedString += string[i];;
            }
        }
        return preparedString.toLowerCase().split('').sort().join('');
    }
    // Option #2 - Regex
    const preparedStringRegex = (string) => {
        return string
            .replace(/[^a-zA-Z0-9]/g, "")
            .toLowerCase()
            .split('')
            .sort()
            .join('');
    }
    const transformedOne = prepareString(stringOne);
    const transformedTwo = prepareString(stringTwo);

    // const transformedOne = preparedStringRegex(stringOne);
    // const transformedTwo = preparedStringRegex(stringTwo);

    return transformedOne === transformedTwo;

}

module.exports = anagram;
