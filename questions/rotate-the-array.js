let input = [1, 2, 3, 4, 5, 6, 7, 8];
let k = 3;

// write the function to rotate the array k number of elements:

function rotateArray(arr, elK) {
    const effectiveK = elK % arr.length;
    if (effectiveK === 0) return arr
    const partToMove = arr.slice(-effectiveK);
    const remainingPart = arr.slice(0, arr.length - effectiveK)
    return partToMove.concat(remainingPart);
}

console.log(rotateArray(input, k));