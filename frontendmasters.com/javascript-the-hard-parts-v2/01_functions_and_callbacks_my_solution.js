// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
    const result = num + 2;
    return result;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
    const result = word + "s";
    return result;
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        const newNum = callback(num);
        newArr.push(newNum);
    }
    return newArr;
}

function multiplyByTwo(number) {
    return number * 2;
}

map([1, 2, 3, 4, 5], multiplyByTwo); //-> [2,4,6,8,10]
multiplyByTwo(1); //-> 2
multiplyByTwo(2); //-> 4

// Challenge 4
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        callback(item);
    }
}

// see for yourself if your forEach works!
let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function (char) {
    alphabet += char;
});
console.log(alphabet);   //prints 'abcd'

// Challenge 5
function mapWith(array, callback) {
    const result = [];
    forEach(array, function (item) {
        result.push(callback(item));
    })
    return result;
}


// Challenge 6
function reduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i]);
    }
    return accumulator;
}
const nums = [4, 1, 3];
const add = function (accumulator, currentValue) {
    return accumulator + currentValue;
}
console.log(reduce(nums, add, 0));   //-> 8


// Challenge 7
function intersection(arrays) {
    return arrays.reduce((acc, curr) => {
        return curr.filter((x) => acc.includes(x));
    });
}

console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]

// Challenge 8
function union(arrays) {
    return arrays.reduce((acc, curr) => {
        const filteredArr = curr.filter((x) => !acc.includes(x));
        return acc.concat(filteredArr);
    });
}

console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]


// Challenge 9
function objOfMatches(array1, array2, callback) {
    const result = {};
    for (let i = 0; i < array1.length; i++) {
        if (callback(array1[i]) === array2[i]) {
            result[array1[i]] = array2[i];
        }
    }
    return result;
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function (str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// Challenge 10
function multiMap(arrVals, arrCallbacks) {
    const result = {};
    for (let i = 0; i < arrVals.length; i++) {
        result[arrVals[i]] = [];
        for (let j = 0; j < arrCallbacks.length; j++) {
            result[arrVals[i]].push(arrCallbacks[j](arrVals[i]));
        }
    }
    return result;
}

console.log(multiMap(['catfood', 'glue', 'beer'], [
    function (str) { return str.toUpperCase(); },
    function (str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); },
    function (str) { return str + str; }
]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// Challenge 11
function objectFilter(obj, callback) {
    const result = {};
    for (const key in obj) {
        if (callback(key.toString()) === obj[key]) {
            result[key] = obj[key];
        }
    }
    return result;
}

const cities = {
    London: 'LONDON',
    LA: 'Los Angeles',
    Paris: 'PARIS',
};
console.log(objectFilter(cities, city => city.toUpperCase()))
// Should log { London: 'LONDON', Paris: 'PARIS'}


// Challenge 12
function majority(array, callback) {
    let countTrue = 0;
    let countFalse = 0;
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            countTrue++;
        } else {
            countFalse++;
        }
    }
    if (countTrue > countFalse) {
        return true;
    } else {
        return false;
    }
}

const isOdd = function (num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false


// Challenge 13
function prioritize(array, callback) {
    let firstArr = [];
    let secondArr = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (callback(item)) {
            firstArr.push(item);
        } else {
            secondArr.push(item);
        }
    }
    let resArr = firstArr.concat(secondArr);
    return resArr;
}

const startsWithS = function (str) { return str[0] === 's' || str[0] === 'S'; };
console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS));
// should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']


// Challenge 14
function countBy(array, callback) {
    const res = {};
    for (const item of array) {
        const key = callback(item);
        !(key in res) ? res[key] = 1 : res[key]++;
    }
    return res;
}

console.log(countBy([1, 2, 3, 4, 5], function (num) {
    if (num % 2 === 0) return 'even';
    else return 'odd';
}));
// should log: { odd: 3, even: 2 }


// Challenge 15
function groupBy(array, callback) {
    const res = {};
    for (const item of array) {
        const key = callback(item);
        if (typeof res[key] === "undefined") {
            res[key] = [];
        }
        res[key].push(item);
    }
    return res;
}

const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }


// Challenge 16
function goodKeys(obj, callback) {
    const res = [];
    for (const key in obj) {
        if (callback(obj[key])) {
            res.push(key);
        }
    }
    return res;
}

const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']


// Challenge 17
function commutative(func1, func2, value) {
    return func1(func2(value)) === func2(func1(value))
}

const multBy3 = n => n * 3;
const divBy4 = n => n / 4;
const subtract5 = n => n - 5;
console.log(commutative(multBy3, divBy4, 11)); // should log: true
console.log(commutative(multBy3, subtract5, 10)); // should log: false
console.log(commutative(divBy4, subtract5, 48)); // should log: false


// Challenge 18
function objFilter(obj, callback) {
    const result = {};
    for (const key in obj) {
        const value = obj[key];
        if (callback(key) === value) {
            result[key] = value;
        }
    }
    return result;
}

const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = n => n / 2;
console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }


// Challenge 19
function rating(arrOfFuncs, value) {
    let count = 0;
    for (let func of arrOfFuncs) {
        if (func(value)) {
            count++;
        }
    }

    return (count / arrOfFuncs.length) * 100;
}

const isEven = n => n % 2 === 0;
const greaterThanFour = n => n > 4;
const isSquare = n => Math.sqrt(n) % 1 === 0;
const hasSix = n => n.toString().includes('6');
const checks = [isEven, greaterThanFour, isSquare, hasSix];
console.log(rating(checks, 64)); // should log: 100
console.log(rating(checks, 66)); // should log: 75


// Challenge 20
function pipe(arrOfFuncs, value) {
    let result = value;
    for (let func of arrOfFuncs) {
        result = func(result);            
    }
    return result;
}

const capitalize = str => str.toUpperCase();
const addLowerCase = str => str + str.toLowerCase();
const repeat = str => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'


// Challenge 21
function highestFunc(objOfFuncs, subject) {
    let bestNum = subject;
    let bestKey = "";
    for (let key in objOfFuncs) {
        let func = objOfFuncs[key];
        let currNum = func(subject);
        if (currNum >= bestNum) {
            bestNum = currNum;
            bestKey = key;
        }
    }
    return bestKey;
}

const groupOfFuncs = {};
groupOfFuncs.double = n => n * 2;
groupOfFuncs.addTen = n => n + 10;
groupOfFuncs.inverse = n => n * -1;
console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'


// Challenge 22
function combineOperations(startVal, arrOfFuncs) {
    return pipe(arrOfFuncs, startVal);
}

function add100(num) {
    return num + 100;
}

function divByFive(num) {
    return num / 5;
}

function multiplyByThree(num) {
    return num * 3;
}

function multiplyFive(num) {
    return num * 5;
}

function addTen(num) {
    return num + 10;
}

console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60
console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10


// Challenge 23
function myFunc(array, callback) {
    let idx = -1;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (callback(element)) {
            idx = i;
            break;
        }
    }
    return idx;
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
    return (num % 2 !== 0);
}

console.log(myFunc(numbers, isOdd)); // Output should be 1
console.log(myFunc(evens, isOdd)); // Output should be -1


// Challenge 24
function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

let sum = 0;

function addToSum(num) {
    sum += num;
}

const numsArr = [1, 2, 3];
myForEach(numsArr, addToSum);
console.log(sum); 
// Should output 6


