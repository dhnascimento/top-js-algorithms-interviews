
function reverseString(str) {
    let newString = '';
    // #option 1
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newString += str[i];
    // }

    // #option 2
    for (let char of str) {
        newString = char + newString;
    }

    // #option 3
    // return str.split('').reverse().join('');

   return newString;
}

module.exports = reverseString;