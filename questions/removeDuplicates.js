// function removeDuplicates(arr) {
//     const newArr = [];
//     for (let item of arr) {
//         if (newArr.indexOf(item) === -1) {
//             newArr.push(item)
//         }
//     }
//     return newArr;
// }

const removeDuplicates = (ar) => {
    let result = [];

    for (let i = 0; i < ar.length; i++) {
        const element = ar[i];

        if (result.indexOf(element) === -1) result.push(element)

    }
    return result
}

const arr = [1, "d", "d", "r", 2, 2, 3, 1, 4]

console.log(removeDuplicates(arr))