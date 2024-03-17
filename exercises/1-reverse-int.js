
function reverseInt(int) {

    let intToString = int.toString();
    
    let reversedInt = '';
    
    if (int < 0) {
        intToString = intToString.slice(1);
    }

    for (let char of intToString) {
        reversedInt = char + reversedInt;
    }

    return parseInt(reversedInt) * (int < 0 ? -1 : 1);
}

module.exports = reverseInt;