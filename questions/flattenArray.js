// function flattenArray(arr, n = Infinity) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i]) && n > 0) {
//             result.push(...flattenArray(arr[i], n - 1)); // Recursively flatten the sub-array
//         } else {
//             result.push(arr[i]); // Push non-array elements to the result
//         }
//     }
//     return result;
// }

// const flattenArrayReduce = (arr, n = Infinity) => {
//     const result = arr.reduce((acc, item) => {
//         if (Array.isArray(item) && n > 0) {
//             return [...acc, ...flattenArrayReduce(item, n - 1)]
//         }
//         else {
//             return [...acc, item];
//         }
//     }, [])
//     return result;
// }

// const flattenSpread = (arr, n = Infinity) => {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i]) && n > 0) {
//             result = [...result, ...flattenSpread(arr[i], n - 1)]
//         } else {
//             result = [...result, arr[i]]
//         }
//     }
//     return result;
// }

// const array = [1, [2, [3, 4]], 5];

// console.log(flattenArray(array, 2))

function f(arr, n = Infinity) {
    const r = [];
    for (let index = 0; index < arr.length; index++) {
        if (Array.isArray(arr[index]) && n > 0) {
            r.push(...f(arr[index], n - 1))
        }
        else {
            r.push(arr[index])
        }
    }
    return r;
}

console.log(f([2, [23, 3, 4], [234, [23423, [23, 234, 234, [232, 234, 234, 234]]]], 76756]))