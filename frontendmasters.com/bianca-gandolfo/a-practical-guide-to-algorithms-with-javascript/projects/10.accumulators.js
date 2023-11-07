const joinElementsRecursive = (array, joinString) => {
    const recurse = (index, resultSoFar) => {
        resultSoFar += array[index];
        
        if (index === array.length - 1) {
            return resultSoFar;
        } else {
            resultSoFar += joinString;
            return recurse(index + 1, resultSoFar);
        }
    }

    return recurse(0, "");
}

const joinElementsIterative = (array, delimiter) => {
    let str = "";
    for (let i = 0; i < array.length - 1; i++) {
        str += array[i] + delimiter;
    }
    str += array[array.length - 1];

    return str;
}
console.log(joinElementsRecursive(["s", "cr", "t cod", " :) :)"], "e"));
console.log(joinElementsIterative(["s", "cr", "t cod", " :) :)"], "e"));