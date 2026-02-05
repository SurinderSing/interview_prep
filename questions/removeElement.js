const array = [1, 2, 3, 4, 5];
const elementToRemove = 3;
// remove the element from the array without creating a new array
const removeElement = (arr, e) => {
    for (let i = 0; i < arr.length; i++) {
        const arrEl = arr[i]
        if (arrEl === e) {
            arr.splice(i, 1);
        }
    }
    return arr
}

console.log(removeElement(array, elementToRemove))