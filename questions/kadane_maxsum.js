// kadane's algo::

// const array = [-2, 1, -3, -3, -5, 4, -6, 2, 1, -5, 4];
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const array = [5, 4, -1, 7, 8];
// const array = [-3,-5];
// const array = [-1];

// Wrong implementation::
// const maxSubArr = (arr) => {
//     let sum = arr[0];
//     let maxSum = arr[0];
//     let start = 0, end = 0;
//     for (let i = 1; i < arr.length; i++) {
//         sum += arr[i];
//         if (sum < 0) {
//             sum = 0;
//             start = i + 1
//         }
//         if (sum > maxSum) {
//             maxSum = sum;
//             end = i + 1
//         }
//     }
//     return [maxSum, arr.slice(start, end)];
// };

// Correct implementation::
// const maxSubArr = (arr) => {
//     let maxSum = arr[0];
//     let currSum = arr[0];

//     let start = 0, tempStart = 0, end = 0;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > currSum + arr[i]) {
//             currSum = arr[i];
//             tempStart = i;
//         } else {
//             currSum += arr[i];
//         }

//         if (currSum > maxSum) {
//             maxSum = currSum;
//             start = tempStart;
//             end = i;
//         }
//     }

//     return [maxSum, arr.slice(start, end + 1)];
// };

// console.log(maxSubArr(array));

const maxSubArrSum = (arr) => {
    let maxSum = arr[0];
    let currentSum = arr[0];
    let start = 0,
        end = 0,
        temp = 0;

    for (let i = 1; i < arr.length; i++) {
        const el = arr[i];
        if (el > currentSum + el) {
            currentSum = el;
            temp = i;
        } else {
            currentSum = currentSum + el;
        }
        if (maxSum < currentSum) {
            maxSum = currentSum;
            start = temp;
            end = i;
        }
    }
    return { maxSum, start, end };
};

console.log(maxSubArrSum(array));