Function.prototype.callPolyfill = function (context, ...args) {
    context.fn = this;
    const result = context.fn(...args)
    delete context.fn
    return result
}

const obj = {
    name: "surinder",
    age: 25,
    call: function () {
        console.log(this.name);
    }

}

let inner = obj.call

inner.callPolyfill(obj)

// function fn(name, age) {
//     console.log(this.name);
//     console.log(name);
//     console.log(age);
// }

// fn.callPolyfill(obj, "name", "43");