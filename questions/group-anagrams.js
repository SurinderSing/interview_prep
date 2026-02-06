// function groupAnagrams(strs) {
//   let hashMap = {};

//   for (let i = 0; i < strs.length; i++) {
//     let key = strs[i].split("").sort().join("");
//     if (!Object.hasOwn(hashMap, key)) {
//       hashMap[key] = [];
//     }
//     hashMap[key].push(strs[i]);
//   }
//   return Object.values(hashMap);
// }

const groupAnagramsUsingMap = (arr) => {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let key = element.toLowerCase().split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, [])
    }
    map.set(key, [...map.get(key), element]);
  }
  // return Object.values(Object.fromEntries(map))
  return [...map.values()]
}



const strs = ["act", "pots", "tops", "cat", "stop", "hat"];
// const strs = ["x"];

// console.log(groupAnagrams(strs));
console.log(groupAnagramsUsingMap(strs));
