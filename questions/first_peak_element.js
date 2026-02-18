let input = [1, 2, 3, 2, 2, 2]

function firstPeakElem(arr) {
    for (let i = 1; i < arr.length -1; i++) {
        if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
            return arr[i]
        }
    }
    return null
}

console.log(firstPeakElem(input));