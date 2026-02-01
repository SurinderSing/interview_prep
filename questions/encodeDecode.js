function encode(strs) {
  //  initialize a empty string variable::
  let str = "";

  // run a loop throw strs array::

  for (let i = 0; i < strs.length; i++) {
    // append the strs one by one in the str with the count of length of str and a special carwctor::
    str += strs[i].length + "#" + strs[i];
  }

  // thn return the str::
  return str;
}

function decode(str) {
  // initialize an empty array and index variable::
  const arr = [];
  let i = 0;

  // iterate through the string::
  while (i < str.length) {
    // find the position of the delimiter::
    const delimiterPos = str.indexOf('#', i);

    // extract the length of the next string::
    const length = parseInt(str.slice(i, delimiterPos));

    // extract the string using the length::
    const slicedStr = str.slice(delimiterPos + 1, delimiterPos + 1 + length);

    // push the extracted string into the array::
    arr.push(slicedStr);

    // move the index past the current string::
    i = delimiterPos + 1 + length;
  }

  // return the array of strings::
  return arr;
}

// Test cases
// console.log(decode(encode(["neet", "code", "love", "you"]))); // Expected: ["neet", "code", "love", "you"]

// console.log(decode(encode(["we", "say", ":", "yes"]))); // Expected: ["we", "say", ":", "yes"]
// console.log(decode(encode([""]))); // Expected: []

console.log(encode(["we", "say", ":", "yes", "!@#$%^&*()"])); // Expected: ["we", "say", ":", "yes"]
console.log(decode(encode(["we", "say", ":", "yes", "!@#$%^&*()"]))); // Expected: ["we", "say", ":", "yes"]
