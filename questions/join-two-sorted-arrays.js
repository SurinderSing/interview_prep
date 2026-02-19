let inputA = [1, 3, 5, 7, 8, 90]
let inputB = [2, 4, 6, 8, 54, 65, 102]

const joinTwoSortedArrays = (arrA, arrB) => {
    let i = 0;
    let j = 0;
    let result = []
    while (arrA[i] || arrB[j]) {
        if (!arrA[i]) {
            result.push(arrB[j]);
            j++;
            continue;
        }

        if (!arrB[j]) {
            result.push(arrA[i]);
            i++;
            continue;
        }

        if (arrA[i] >= arrB[j]) {
            result.push(arrB[j]);
            j++;
            continue;
        }

        if (arrA[i] <= arrB[j]) {
            result.push(arrA[i]);
            i++;
            continue;
        }

    }
    return result
}
// const joinTwoSortedArrays = (arrA, arrB) => {
//     let i = 0;
//     let j = 0;
//     let result = []
//     while (i < arrA.length || j < arrB.length) {
//         if (i >= arrA.length) {
//             result.push(arrB[j]);
//             j++;
//             continue;
//         }

//         if (j >= arrB.length) {
//             result.push(arrA[i]);
//             i++;
//             continue;
//         }

//         if (arrA[i] >= arrB[j]) {
//             result.push(arrB[j]);
//             j++;
//             continue;
//         }

//         if (arrA[i] <= arrB[j]) {
//             result.push(arrA[i]);
//             i++;
//             continue;
//         }

//     }
//     return result
// }

console.log(joinTwoSortedArrays(inputA, inputB))