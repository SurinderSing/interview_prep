// function test() {
//     let a = 10;
//     if (true) {
//         let a = 20;
//         console.log(a);
//     }
//     console.log(a);
// }

// test();


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Array.prototype.myName = "Surinder"

// const arr = [];
// arr.myName = "Surinder3";

// console.log(arr.myName);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const obj = {
//     name: "Surinder",
//     getName: function () {
//         return this.name;
//     }
// }
// console.log(obj.getName());
// obj.__proto__.getName = function () {
//     return this.name;
// }

// console.log(obj.__proto__);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Array.prototype.myMap = function (cb) {
//     let arr = [];
//     for (let i = 0; i < this.length; i++) {
//         arr.push(cb(this[i], i, this));
//     }
//     return arr;
// }


Array.prototype.myFilter = function (cb) {
    const arr = [];
    for (i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            arr.push(this[i])
        }
    }
    return arr;
}

const nums = [1, 2, 3, 4, 5];

const newNums = nums.myFilter((item) => {
    return item === 2
})

console.log(newNums)