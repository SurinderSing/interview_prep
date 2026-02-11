// Longest Common Prefix
//
//
//
const input = ["flower", "flower", "flow", "flight"]
// // Output: "fl"
// const input = ["dog","racecar","car"]
// Output: ""

const longestCommonPrefix = function (strs) {
    if (!strs.length) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
            if (!prefix) return "No common prefix";
        }
    }

    return prefix;
}

console.log(longestCommonPrefix(input))