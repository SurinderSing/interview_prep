function func(nums, k) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.get(nums[i]) + 1 || 1);
  }

  let entriesSorted = [...map.entries()].sort((a, b) => a[1] - b[1]);
  return entriesSorted.slice(entriesSorted.size - k, k).map((x) => x[0]);
}

let nums = [1, 1, 1, 2, 2, 3, 3, 3, 3],
  k = 2;
// output = [1, 3];

// let nums = [1, 2, 2, 3, 3, 3],
//   k = 2;
// output = [2, 3];

// let nums = [7, 7],
//   k = 1;
// output = [7];

console.log(func(nums, k));

// Top K Frequent Elements::

// let nums = [1, 1, 1, 2, 2, 3, 3, 3, 3],
//   k = 2;
// // output = [2, 3];

// const findTopKFrqtn = (numsArr, elementsCount) => {
//   const countMap = new Map();
//   for (let i = 0; i < numsArr.length; i++) {
//     if (!countMap.has(numsArr[i])) {
//       countMap.set(numsArr[i], 0);
//     }
//     countMap.set(numsArr[i], countMap.get(numsArr[i]) + 1);
//   }
//   let a = [...countMap.entries()].sort((a, b) => a[1] - b[1]);

//   return a.slice(countMap.size - elementsCount).map((o) => o[0]);
// };
// console.log(findTopKFrqtn(nums, k));
