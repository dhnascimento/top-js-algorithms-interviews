// Given an array and chunk size, divide the array into many sub-arrays where each sub-array size is of length size

function chunk(array, size) {
    const chuckedArray = [];

    // alternate take: use slice to solve it
    // let movingIndex = 0;
    // while (movingIndex < array.length) {
    //     chuckedArray.push(array.slice(movingIndex, movingIndex + size));
    //     movingIndex += size;
    // }

    // create required nested arrays
    const numArrays = Math.ceil(array.length / size);
    for (let i = 1; i <= numArrays; i++ ) {
        chuckedArray.push([]);
    }

    let currSubIndex = 0;

    for (let j = 0; j < array.length; j++) {
        if (chuckedArray[currSubIndex].length === size) {
            currSubIndex++;
        }
        chuckedArray[currSubIndex].push(array[j]);

    }

    return chuckedArray;

}

module.exports = chunk;