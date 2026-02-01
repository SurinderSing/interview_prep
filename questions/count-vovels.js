const string = "Hello, World! This is a simple test string.";
const vowels = ['a', 'e', 'i', 'o', 'u'];

// function countVovelsFilter(str) {
//     const strArr = str.toLowerCase().split("");

//     const strFiltered = strArr.filter(item => {
//         return vowels.includes(item)
//     })
//     return strFiltered.length;
// }

function countVovels(str) {
    const strArr = str.toLowerCase().split("");
    let count = 0;

    for (let i = 0; i < strArr.length; i++) {

        if (vowels.includes(strArr[i])) {
            count += 1
        }
    }

    return count;
}

console.log(countVovels(string));
