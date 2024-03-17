
function palindrome(string) {

    // option #1 - reverse string and compare
    // let reversedString = '';
    
    // for (let char of string) {
    //     reversedString = char + reversedString;
    // }

    // return reversedString === string;

    // option #2 start and end of the string and exist with false if there is not a match
    for (let i = 0; i < Math.floor(string.length / 2); i++) {
        if (string[i] !== string[string.length - 1 - i]) return false;
    }

    return true;
}

module.exports = palindrome;