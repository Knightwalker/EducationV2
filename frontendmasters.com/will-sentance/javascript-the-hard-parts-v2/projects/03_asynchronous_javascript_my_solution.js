/* CHALLENGE 1 */

function sayHowdy() {
    console.log('Howdy');
}

function testMe() {
    setTimeout(sayHowdy, 0);
    console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
testMe(); // what order should these log out? Howdy or Partnah first?


/* CHALLENGE 2 */

function delayedGreet() {
    // ADD CODE HERE
    setTimeout(function() {
        console.log("welcome");
    }, 3000);
}
// Uncomment the following line to check your work!
delayedGreet(); // should log (after 3 seconds): welcome


/* CHALLENGE 3 */

function helloGoodbye() {
    setTimeout(function() {
        console.log("good bye");
    }, 3000);
    console.log("hello");
}
// Uncomment the following line to check your work!
helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye


/* CHALLENGE 4 */

function brokenRecord() {
    setInterval(function() {
        console.log("hi again")
    }, 1000)
}
// Uncomment the following line to check your work!
brokenRecord(); // should log (every second): hi again


/* CHALLENGE 5 */

function limitedRepeat() {
    let count = 0;
    const id = setInterval(function() {
        console.log("hi again");
        count++;
        if (count >= 5) {
            clearInterval(id);
        }
    }, 1000)
}
// Uncomment the following line to check your work!
limitedRepeat(); // should log (every second, for 5 seconds): hi for now


/* CHALLENGE 6 */

function everyXsecsForYsecs(cb, interval, duration) {
    const intervalId = setInterval(cb, interval);

    setTimeout(() => {
        clearInterval(intervalId);
    }, duration);
}
// Uncomment the following lines to check your work!
function theEnd() {
  console.log('This is the end!');
}
everyXsecsForYsecs(theEnd, 2000, 20000); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!


/* CHALLENGE 7 */

function delayCounter(target, wait) {
    let counter = 0;

    return function() {
        let intervalId = setInterval(() => {
            counter++;
            console.log(counter);
            if (counter === target) {
                clearInterval(intervalId);
            }
        }, wait);
    }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const countLogger = delayCounter(3, 1000)
countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */

function promised(val) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(val);
        }, 2000);
    });
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const createPromise = promised('wait for it...');
createPromise.then((val) => console.log(val)); 
// will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */

class SecondClock {
    constructor(cb) {
        this.cb = cb;
        this.count = 0;
        this.intervalId = null;
    }
    start() {
        this.intervalId = setInterval(() => {
            if (this.count > 60) {
                this.count = 0;
            }
            this.count++;
            this.cb(this.count);
        }, 1000);
    }
    reset() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const clock = new SecondClock((val) => { console.log(val) });
console.log("Started Clock.");
clock.start();
setTimeout(() => {
    clock.reset();
    console.log("Stopped Clock after 6 seconds.");
}, 6000);

/* CHALLENGE 10 */

function debounce(callback, interval) {
    // ADD CODE HERE
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// function giveHi() { return 'hi'; }
// const giveHiSometimes = debounce(giveHi, 3000);
// console.log(giveHiSometimes()); // -> 'hi'
// setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'

