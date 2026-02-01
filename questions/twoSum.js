// function twoSum(numbers, target) {
//     for (let [i, value1] of numbers.entries()) {
//         for (let [j, value2] of numbers.entries()) {
//             if (value1 + value2 === target && i !== j) {
//                 return [i, j]
//             }
//         }
//     }

//     return [];
// }
function twoSum(numbers, target) {
    const seen = new Map();

    for (let [i, num] of numbers.entries()) {
        const need = target - num;
        if (seen.has(need)) {
            return [seen.get(need), i]
        } else {
            seen.set(num, i)
        }
    };

    return [];
}

nums = [3, 2, 6, 6, 4, 5, 6, 3, 8, 4]
target = 6

console.log(twoSum(nums, target))