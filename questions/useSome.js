let input = [1, 2, 3, 222]

const checkSome = (arr) => {
    return arr.every(item => item > 100)
}

console.log(checkSome(input))
