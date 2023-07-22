let operations = 0;
let operationsWithMemo = 0;

const fact = (n) => {
    operations++;
    if (n <= 1) {
        return 1;
    }
    return n * fact(n - 1);
}

const cache = {};
const factWithMemo = (n) => {
    operationsWithMemo++;
    if (n <= 1) {
        return 1;
    }
    if (typeof cache[n] === "undefined") {
        let calc = n * factWithMemo(n - 1);
        cache[n] = calc;
        return cache[n];
    }
    return cache[n];
}

console.time("fact");
console.log(fact(10));
console.log("operations: " + operations);
console.timeEnd("fact");

console.time("factWithMemo");
console.log(factWithMemo(10));
console.log("operations: " + operationsWithMemo);
console.timeEnd("factWithMemo");