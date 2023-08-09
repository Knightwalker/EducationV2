// input: [1,5,2,1] => output: [1,2,5]
// input: [4,2,2,3,2,2,2] => output: [2,3,4]

const uniqueSort = (arr) => {
    const cache = {};
    const resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof cache[arr[i]] === "undefined") {
            cache[arr[i]] = true;
            resultArr.push(arr[i]);
        }
    }

    return resultArr.sort((a,b) => a - b);
}

console.log(uniqueSort([1,5,2,1]));
console.log(uniqueSort([4,2,2,3,2,2,2]));