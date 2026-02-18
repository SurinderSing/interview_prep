input = [1, 2, 4, 5];

// find the missing value by itration:
// const findMissingValue = (arr) => {
//     let sortedArr = arr.sort((a, b) => a - b)
//     for (let i = 1; i <= sortedArr.length; i++) {
//         let el = sortedArr[i]
//         // let cp = i + 1;
//         // if (cp !== el) return cp
//         // if (el !== i) return i

//         if (sortedArr.indexOf(i) == -1) {
//             return i
//         }

//     }
// }
// console.log(findMissingValue(input))

const findMissingValueFormula = (arr) => {
    // let actualSum = 0;
    // let reqSum = 0;

    // for (let i = 0; i < arr.length; i++) {
    //     actualSum += arr[i]
    //     reqSum += i + 1
    // }
    // reqSum += arr.length + 1
    // return reqSum - actualSum
    // // // // // 
    //
    //
    // 
    // 
    // formula for expected sum::
    // n = arr.length + 1
    // expectedSum = n*(n+1)/2
    let n = arr.length + 1
    let expSum = n * (n + 1) / 2
    let actSum = arr.reduce((acc, item) => acc + item, 0)
    return expSum - actSum
}

console.log(findMissingValueFormula(input))