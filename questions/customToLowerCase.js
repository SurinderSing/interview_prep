const string = "Hello, World!";

// const myToLowerCase = (str) => {

//     var lowerStr = "";

//     for (let i = 0; i < str.length; i++) {
//         const elementCharCode = str.charCodeAt(i);
//         if (elementCharCode >= 65 && elementCharCode <= 90) {
//             // we will add 35 and convert that to string and then concate
//             lowerStr += String.fromCharCode(elementCharCode + 32)
//         }
//         else {
//             // we will concate directly
//             lowerStr += str[i]
//         }

//     }

//     return lowerStr;

// }

// console.log(myToLowerCase(string));

const customToLowerCase = (str) => {
    let result = ""
    for (let i = 0; i < str.length; i++) {
        let element = str[i];
        if (element.charCodeAt() >= 65 && element.charCodeAt() <= 90) {
            result += String.fromCharCode(element.charCodeAt() + 32)
        } else {
            result += element
        }
    }

    return result
}

console.log(customToLowerCase(string))