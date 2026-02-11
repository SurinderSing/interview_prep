let input = [1, 2, 3, 4, 5, 6];

Array.prototype.mapPolyfill = function (cb) {
    result = [];

    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        result.push(cb(element, i, this))
    }

    return result
}

console.log(input.mapPolyfill(item => item + 2))