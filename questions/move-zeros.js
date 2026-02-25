let input = [0, 1, 0, 3, 0, 0, 12]


// const moveZerosEnd = (arr) => {
//     let result = [];
//     let zeros = []

//     for (let i = 0; i < arr.length; i++) {
//         const el = arr[i];
//         if (el !== 0) {
//             result.push(el)
//         }
//         else {
//             zeros.push(0)
//         }
//     }
//     return result.concat(zeros)
// }
//
//
//
const moveZerosEnd = (arr) => {
    let j = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp;

            j++
        }
    }

    return arr
}

console.log(moveZerosEnd(input))