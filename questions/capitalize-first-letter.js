
const string = "hello world";

const capitalizeFirstLetter = (str) => {
    const s = String(str).trim();
    if (!s) return "";
    return s.slice(0, 1).toUpperCase() + s.slice(1);
}

const capitalizeFirstLetterOfEveryWord = (str) => {
    const s = String(str).trim();
    if (!s) return "";
    return s.split(/\s+/).map(word => word.slice(0, 1).toUpperCase() + word.slice(1)).join(" ");
};

console.log(capitalizeFirstLetter(string)); // Output: "Hello world"