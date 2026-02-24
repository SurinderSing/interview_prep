let input = [0, 1, 0, 3, 0, 0, 12]


const moveZerosEnd = (arr) => {
    let j = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp;

            j++
        }
    }

    return arr
}

console.log(moveZerosEnd(input))