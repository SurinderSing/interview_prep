const object = {
    1: 2342,
    2: "you",
    3: "OK",
}

const customObjectEntries = function (obj) {
    let result = [];

    for (key in obj) {
        let value = obj[key]
        result.push([key, value])

    }

    return result;
}

console.log(customObjectEntries(object))