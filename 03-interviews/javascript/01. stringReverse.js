/* 
Write a function that reverses a given string. 
Constrains: You are not allowed to use any built-in methods or libraries.
*/

// Approach 1: Build String Iteratively
let inputStr = "hello world!";

function reverse(str) {
    let res = "";
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i];
    }
    return res;
}

console.log(reverse(inputStr)); // "!dlrow olleh"

// Approach 2: Build String Iteratively (with Micro Optimizations)
function reverse(str) {
    let res = "";
    let len = str.length;
    for (let i = len - 1; i >= 0; --i) {
        res += str[i];
    }
    return res;
}

console.log(reverse(inputStr)); // "!dlrow olleh"

// Approach 3: In-Place Reversal. Immutable String
function reverse(str) {
    let len = str.length;
    let mid = Math.floor(len / 2);
    let res = [];

    for (let i = 0; i < mid; ++i) {
        res[i] = str[len - 1 - i];
        res[len - 1 - i] = str[i];
    }

    if (len % 2 != 0) {
        res[mid] = str[mid];
    }

    return res.join("");
}

console.log(reverse(inputStr)); // "!dlrow olleh"