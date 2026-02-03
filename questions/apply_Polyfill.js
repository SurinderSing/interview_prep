Function.prototype.applyPolyfill = function (context) {
    if (!Array.isArray(arguments[1])) {
        throw new Error("Please Prove array in arguments!")
    }
    context.fn = this;
    let result = context.fn(...arguments[1]);
    delete context.fn
    return result;
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

fn.applyPolyfill(obj, ["name", "43", "ewq", 3423]);