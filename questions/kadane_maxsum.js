// kadane's algo::

const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const array = [5, 4, -1, 7, 8];
// const array = [-1];

const maxSubArr = (arr) => {
    let sum = arr[0];
    let maxSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i];
        if (sum > maxSum) {
            maxSum = sum;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return maxSum;
};
console.log(maxSubArr(array));