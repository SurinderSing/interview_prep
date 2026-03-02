let input = "   hello world   !"
// let output = input.replace(/\s/g, "");
// let output = input.replace(/\s+/g, "");
// let output = input.replace(/   /g, "");
// let output = input.split(" ").join("");
let output = input.replaceAll(" ","");
console.log(output);