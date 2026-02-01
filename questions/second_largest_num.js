function secLargestNum(arr) {

    let largest = -Infinity
    let secLargest = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            secLargest = largest;
            largest = arr[i]
        } else if (arr[i] > secLargest) {
            secLargest = arr[i];
        }

    }
    return secLargest
}
console.log(secLargestNum([2, 2, 2, 2, 3, 2, 5]));