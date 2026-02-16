let input = 'araasssddsdemme';

// function charFrequency(str) {
//     let charMap = new Map();
//     for (let i = 0; i < str.length; i++) {
//         let el = str[i]
//         if (!charMap.has(el)) {
//             // we will add the key into the map value will be 0
//             charMap.set(el, 0);
//         }
//         // we will increase the count
//         charMap.set(el, charMap.get(el) + 1);

//     }
//     return Object.fromEntries(charMap.entries())
// }
function charFrequencyShort(str) {
    let charMap = new Map();
    for (let i = 0; i < str.length; i++) {
        let el = str[i]
        charMap.set(el, charMap.get(el) + 1 || 1)

    }
    return Object.fromEntries(charMap.entries())
}

console.log(charFrequencyShort(input))