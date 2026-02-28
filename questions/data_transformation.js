let inputOrders = [
    { id: 1, userId: 101, amount: 200, status: "completed" },
    { id: 2, userId: 102, amount: 300, status: "pending" },
    { id: 3, userId: 101, amount: 150, status: "completed" },
    { id: 4, userId: 103, amount: 400, status: "completed" },
    { id: 5, userId: 102, amount: 100, status: "completed" },
];

// required output::
//
// [
//   { userId: 101, totalAmount: 350 },
//   { userId: 102, totalAmount: 100 },
//   { userId: 103, totalAmount: 400 }
// ]


const sumCommonOrdersAmmount = (orders) => {
    let map = new Map();
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i]
        if (order.status === "pending") continue
        if (!map.has(order.userId)) {
            // we will add (set) that to map
            map.set(order.userId, { userId: order.userId, totalAmount: order.amount })
        } else {
            // add the ammout to existing same order
            // map.set(order.userId, { ...currentMapOrder, totalAmount: currentMapOrder.totalAmount + order.amount })
            let currentMapOrder = map.get(order.userId)
            currentMapOrder.totalAmount += order.amount;
        }
    }

    // return result by converting map to required format
    return [...map.values()];
}

console.log(sumCommonOrdersAmmount(inputOrders));