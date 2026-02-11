const infiniteCurrency = (num1) => {
    return (num2) => {
        if (num2 === undefined) {
            return num1;
        } else {
            return infiniteCurrency(num1 + num2);
        }
    }
}

console.log(infiniteCurrency(5)(10)(15)()); // Output: 30