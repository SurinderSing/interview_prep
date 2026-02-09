const string = "hello world";

const capitalizeFirstLetter = (str) => {
    let result = '';
    result += str.slice(0, 1).toUpperCase() + str.slice(1)
    return result;
};

console.log(capitalizeFirstLetter(string)); // Output: "Hello world"