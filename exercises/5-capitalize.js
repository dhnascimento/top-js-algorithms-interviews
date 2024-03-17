
function capitalize(string) {

    const stringArray = string.split(' ');
    
    const upperCaseStringsArray = stringArray.map((str) => {
        if (str.length) {
            return str[0].toUpperCase() + str.slice(1);
        } else {
            return str;
        }

    });

    return upperCaseStringsArray.join(' ');

}

module.exports = capitalize;