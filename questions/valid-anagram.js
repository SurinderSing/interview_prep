function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const mapS = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!mapS.has(s[i])) {
      mapS.set(s[i], 0);
    }
    mapS.set(s[i], mapS.get(s[i]) + 1);
  }

  const mapT = new Map();

  for (let i = 0; i < t.length; i++) {
    if (!mapT.has(t[i])) {
      mapT.set(t[i], 0);
    }
    mapT.set(t[i], mapT.get(t[i]) + 1);
  }

  for ([key] of mapS) {
    if (mapT.get(key) !== mapS.get(key)) {
      return false;
    }
  }
  return true;

  // return s.split("").sort().join() === t.split("").sort().join()
}

const s = "racecar";
const t = "carrace";

console.log(isAnagram(s, t));
