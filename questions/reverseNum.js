const number = 121;

function reverseNumber(num) {
    let numbersArray = num.toString().split("");
    let numbersArrayClone = [...numbersArray]
    let count = 0;
    for (let i = numbersArray.length - 1; i >= 0; i--) {
        numbersArray.splice(i, 1, numbersArrayClone[count])
        count = count + 1
    }
    return numbersArray
}

function checkPalindrome(num) {
    const reversNum = +reverseNumber(num).join("");
    if (num === reversNum) {
        return true;
    }
    return false
}
// console.log(reverseNumber(number));
console.log(checkPalindrome(number))
