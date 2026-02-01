const number = 6
// 0 1 1 2 3 5
// function fibonacciSeries(num) {
//     const array = [0, 1]
//     for (let i = 2; i <= num; i++) {
//         array.push(array[i - 1] + array[i - 2])
//     }
//     return array[num]
// }
// console.log(fibonacciSeries(number))


// recursion ::

function fibonacciRecursion(number) {
    // if (number === 0) return 0;
    // if (number === 1) return 1;
    if (number <= 1) return number
    return fibonacciRecursion(number - 1) + fibonacciRecursion(number - 2);
}
console.log(fibonacciRecursion(number))