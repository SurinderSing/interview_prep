Function.prototype.bindPolyfill = function (context, ...args) {
    let orignalFn = this;
    return function (...newArgs) {
        return orignalFn.apply(context, [...args, ...newArgs])
    }
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

const bindfn = fn.bindPolyfill(obj, "John", 30);

console.log(bindfn())