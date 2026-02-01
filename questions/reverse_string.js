function reverseString(str) {
    let reversedStr = ''
    for (let i = 0; i < str.length; i++) {
        reversedStr += str[str.length - 1 - i]
    }

    return reversedStr;
}

console.log(reverseString("23423"))