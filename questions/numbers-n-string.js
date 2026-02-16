let input = "sdfsd3dsd23cds2cxw323sdf";

// const findNumbersInString = (str) => {

//     let result = [];

//     for (let i = 0; i < str.length; i++) {
//         const el = str[i];
//         if (!isNaN(el)) {
//             result.push(Number(el))
//         }
//     }

//     return result;
// }

// console.log(findNumbersInString(input));

// const findNumbersInStringSequences = (str) => {

//     let result = [];

//     let currentNum = ""

//     for (let i = 0; i < str.length; i++) {
//         const el = str[i];
//         if (!isNaN(el)) {
//             currentNum += el
//         }
//         else if (currentNum !== "") {
//             result.push(Number(currentNum))
//             currentNum = ""
//         }

//     }

//     return result;
// }

// console.log(findNumbersInStringSequences(input))

const findNumbersInStringRegex = (str) => {
    let result = str.match(/\d+/g);
    return result.map(Number)
}

console.log(findNumbersInStringRegex(input))