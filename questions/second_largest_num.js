// function secLargestNum(arr) {

//     let largest = -Infinity
//     let secLargest = -Infinity

//     for (let i = 0; i < arr.length; i++) {
//         if (largest < arr[i]) {
//             secLargest = largest;
//             largest = arr[i]
//         } else if (arr[i] > secLargest && arr[i] < largset) {
//             secLargest = arr[i];
//         }

//     }
//     return secLargest
// }

const secLargestNum = (arr) => {
    let largset = arr[0];
    let secLargest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        const element = arr[i];
        if (element > largset) {
            secLargest = largset;
            largset = element;
        } else if (element > secLargest && element < largset) {
            secLargest = element
        }
    }
    return secLargest;
}
console.log(secLargestNum([2, 4, 8, 4, 42, 42, 2, 9, 2, 3, 2, 5]));