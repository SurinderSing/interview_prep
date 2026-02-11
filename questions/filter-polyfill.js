let input = [1, 2, 3, 4, 5];

Array.prototype.filterPolyfill = function (cb) {
    result = [];
    for (let i = 0; i < this.length; i++) {
        const element = this[i];

        if (cb(element, i, this)) {
            result.push(element);
        }

    }
    return result
}

console.log(input.filterPolyfill(item => item > 2));