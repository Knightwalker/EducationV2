/**
 * Exercise 1
 * Time Complexity: O(n)
 */
var countChars = function (str) {
    var count = 0; // 1 operation

    for (var i = 0; i < str.length; i++) {
        count++; // 5 operations
    }

    return count++; // 1 operation
}

countChars("dance"); // 5

/**
 * Exercise 2
 * Time Complexity: O(1)
 */
var countCharsV2 = function (str) {
    return str.length; // 1 operation
}
countCharsV2("dance"); // 5

/**
 * Exercise 3
 * Time Complexity: O(n)
 * Explanation: The complexity of O(n) + O(n) is still O(n). In Big O notation, we are interested in the growth rate of the run-time of the algorithm as the size of the input increases.
 */
var myList = ["hello", "hola"];
myList.push("bonjour"); // 1 operation O(1)
myList.unshift(); // O(n) because the array needs to re-arrange
myList.shift(); // O(n) because the array needs to re-arrange

/**
 * Exercise 4
 * Time Complexity: O(n^2)
 */
const isUnique = (arr) => {
    let result = true;

    for (let i = 0; i < arr.length; i++) {
        console.log(`~~~~ OUTER LOOP ~~~~ i === ${i}`);

        for (let j = 0; j < arr.length; j++) {
            console.log(`~~~~ INNER LOOP ~~~~ j === ${j}`);
            if (i !== j && arr[i] === arr[j]) {
                result = false;
            }
        }
    }

    return result;
};

console.log(isUnique([1, 2, 3]) === true);
console.log(isUnique([1,1,3]) === false);

/**
 * Exercise 5
 * Time Complexity: O(n)
 */
const isUniqueV2 = (arr) => {
    const cache = {};
    let result = true;

    for (let i = 0; i < arr.length; i++) {
        console.log(`~~~~ LOOP ~~~~ i === ${i}`);
        if (cache[arr[i]]) {
            result = false;
        } else {
            cache[arr[i]] = true;
        }
    }

    return result;
}