// Section 1. Hello TypeScript
/**
 * Create a promise that resolves after some time
 * @param n number of milliseconds before promise resolves
 */
function timeout(n: number) {
    return new Promise((res) => setTimeout(res, n));
}

/**
 * Add three numbers
 * @param a first number
 * @param b second
 */
export async function addNumbers(a: number, b: number) {
    await timeout(500)
    return a + b;
}

//== Run the program ==//
(async () => {
    console.log(await addNumbers(3, 4));
})()

// Section 2. Variable Declarations & Inference
const age = 6;

// Section 3. Implicit any and type annotations
// between 500 and 1000
const RANDOM_WAIT_TIME =
    Math.round(Math.random() * 500) + 500

let startTime = new Date();
let endTime: Date;

setTimeout(() => {
    endTime = new Date()
}, RANDOM_WAIT_TIME);

function add(a: number, b: number): number {
    return a + b;
}
const result = add(3, 4);
// const p = new Promise(result);