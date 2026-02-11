let array = [1, 2, 3, 4, 5, 6];

Array.prototype.reducePolyfill = function (cb, initValue) {
    let acc = initValue;
    for (let i = 0; i < this.length; i++) {
        acc = acc || acc === 0 ? cb(acc, this[i], i, this) : this[0];
    }
    return acc;
}
console.log(array.reducePolyfill((a, i) => {
    return a + i
}))