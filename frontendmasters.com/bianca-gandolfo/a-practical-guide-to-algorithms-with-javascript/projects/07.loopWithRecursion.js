const loopNTimes = (n) => {
    console.log("n ===", n);
    if (n <= 1) {
        return "complete";
    }
    return loopNTimes(n-1);
}
loopNTimes(5);


function loopFromTo(start, end) {
    console.log("hitting index", start);

    if (start >= end) {
        return;
    } else {
        loopFromTo(start + 1, end);
    }

}
loopFromTo(1, 5);