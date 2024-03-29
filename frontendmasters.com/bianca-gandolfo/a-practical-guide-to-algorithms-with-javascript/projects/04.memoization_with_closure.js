// Task 3: Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later.

const memoizedClosureTimes10 = () => {
    const cache = {};

    const times10 = (n) => (n * 10);

    const memo = (n) => {
        if (n in cache) {
            return cache[n];
        } else {
            return cache[n] = times10(n);
        }
    }

    return memo;
};

const memoClosureTimes10 = memoizedClosureTimes10();
console.log('~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~');
try {
    console.log('Task 3 calculated value:', memoClosureTimes10(9));	// calculated
    console.log('Task 3 cached value:', memoClosureTimes10(9));	// cached
} catch (e) {
    console.error('Task 3:', e);
}