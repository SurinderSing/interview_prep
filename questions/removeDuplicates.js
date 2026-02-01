function removeDuplicates(arr) {
    const newArr = [];
    for (let item of arr) {
        if (newArr.indexOf(item) === -1) {
            newArr.push(item)
        }
    }
    return newArr;
}

const arr = [1, 2, 2, 3, 1, 4]

console.log(removeDuplicates(arr))