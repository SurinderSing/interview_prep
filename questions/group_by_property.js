const groupByProperty = (arr, prop) => {
    return arr.reduce((acc, obj) => {
        const key = obj[prop];
        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(obj);

        return acc;
    }, {});
}

arr = [{ id: 1, category: 'A' }, { id: 2, category: 'B' }, { id: 3, category: 'A' }], prop = 'category'

console.log(groupByProperty(arr, prop))