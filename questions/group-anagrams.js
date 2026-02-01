function groupAnagrams(strs) {
  let hashMap = {};

  for (let i = 0; i < strs.length; i++) {
    let key = strs[i].split("").sort().join("");
    if (!Object.hasOwn(hashMap, key)) {
      hashMap[key] = [];
    }
    hashMap[key].push(strs[i]);
  }
  return Object.values(hashMap);
}

const strs = ["act", "pots", "tops", "cat", "stop", "hat"];
// const strs = ["x"];

console.log(groupAnagrams(strs));
