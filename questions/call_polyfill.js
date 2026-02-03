Function.prototype.callPolyfill = function (context, ...args) {
    context.fn = this;
    return context.fn(...args)
}

const obj = {
    name: "surinder",
    age: 25,
}

function fn(name, age) {
    console.log(this.name);
    console.log(name);
    console.log(age);
}

fn.callPolyfill(obj, "name", "43");