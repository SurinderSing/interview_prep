let input = "reelleer"

const checkPalindromeTwoPointers = (str) => {
  let startPointer = 0;
  let endPointer = str.length - 1;

  while (startPointer < endPointer) {
    if (str[startPointer] !== str[endPointer]) {
      return false
    }
    startPointer++
    endPointer--
  }

  return true
}

console.log(checkPalindromeTwoPointers(input))