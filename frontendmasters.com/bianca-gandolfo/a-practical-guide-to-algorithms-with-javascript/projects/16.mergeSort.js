/**
 * Merge sort algorithm that sorts an array of numbers in ascending order.
 * @param {number[]} arr - The array to sort.
 * @returns {number[]} The sorted array.
 * @remarks
 * Time complexity: O(n*log(n)), where n is the number of elements in the array.
 * Space complexity: O(n), where n is the number of elements in the array.
 */
const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, middle);
    let rightArr = arr.slice(middle, arr.length);
    let leftArrSorted = mergeSort(leftArr);
    let rightArrSorted = mergeSort(rightArr);
    let mergedArr = merge(leftArrSorted, rightArrSorted);
    return mergedArr;
}

function merge (leftArr, rightArr) {
    let resultArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            resultArr.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            resultArr.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    let leftArrSlice = leftArr.slice(leftIndex) 
    let rightArrSlice = rightArr.slice(rightIndex);
    resultArr = resultArr.concat(leftArrSlice.concat(rightArrSlice));
    return resultArr;
}

console.log(mergeSort([64, 34, 25, 12, 22, 11, 90])); // Output: [11, 12, 22, 25, 34, 64, 90]