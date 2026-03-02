let input = [3, 3, 3, 3, 2, 2, 2, 2, 2, 4, 4, 1, 6, 6, 6];

const frequencySort = (arr) => {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i]
        map.set(el, map.has(el) ? map.get(el) + 1 : 1);
    }
    return [...map.entries()].sort((a, b) => b[1] - a[1]).map(item => item[0])
}

console.log(frequencySort(input));