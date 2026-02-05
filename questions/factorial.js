// const getFactorial = (n) => {
//     if (n <= 0) return "number should be greater then 0"
//     let result = 1;
//     for (let i = n; i > 0; --i) {
//         result = i * result
//     }
//     return result
// }
// const getFactorialBigInt = (n) => {
//     if(n <= 0) return "number should be greater then 0"
//     let result = 1n;
//     for (let i = BigInt(n); i > 0n; --i) {
//         result = i * result
//     }
//     return result
// }
// console.log(getFactorialBigInt(434n));

const getFactorial = (n) => {
    let Bign = BigInt(n);
    if (Bign <= 0n) return "number should be greater then 0"
    let result = 1n;
    for (let i = 2n; i <= Bign; i++) {
        result *= i
    }
    return result;
}

console.log(getFactorial(7));