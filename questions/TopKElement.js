let nums = [1, 1, 1, 2, 2, 3];
let k = 3;
// output = [1, 2];
function topKthElements(nums, k) {
    let sorted = nums.sort((a, b) => b - a);
    let set = new Set([...sorted]);
    return [...set][k - 1];
}

console.log(topKthElements(nums, k));