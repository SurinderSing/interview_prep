function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn(...args)
        }, delay);
    }
}

// function throttle(fn, delay) {
//     let timeout;

//     return function (...args) {
//         if (!timeout) {  // Only execute if NO pending timeout
//             fn(...args);
//             timeout = setTimeout(() => {
//                 timeout = null;
//             }, delay);
//         }
//     }
// }

// better to understand throttle ::

// function throttle(fn, delay) {
//     let isThrottling = false;

//     return function (...args) {
//         if (!isThrottling) {           // Check first
//             fn(...args);
//             isThrottling = true;       // Then set to true
//             setTimeout(() => {
//                 isThrottling = false;  // Reset after delay
//             }, delay);
//         }
//     }
// }

function throttle(fn, delay) {
    let isThrottling = false;

    return function (...args) {
        if (isThrottling) return;

        fn(...args);
        isThrottling = true

        setTimeout(() => {
            isThrottling = false
        }, delay);

    }

}