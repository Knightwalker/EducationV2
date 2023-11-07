const memoize = (fn) => {
    const cache = {};

    return (...args) => {
        const key = args[0];
        if (key in cache) {
            return cache[key];
        } else {
            const result = fn(key);
            cache[key] = result;
            return result;
        }
    }
}

const fact = memoize((n) => {
    if (n <= 1) {
        return 1;
    }
    return n * fact(n - 1);
});

console.log(fact(5)); // 120 calculated
console.log(fact(5)); // 120 cached