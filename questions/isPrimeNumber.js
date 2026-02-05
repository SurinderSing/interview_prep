const isPrimeNumber = (n) => {

    if (n < 0) return "number should be positive"
    if (n <= 2) return true

    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i == 0) return false
    }
    return true
}

console.log(isPrimeNumber(11));