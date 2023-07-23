/**
 * Classic bubble sort algorithm that sorts an array of numbers in ascending order.
 * @param {number[]} arr - The array to sort.
 * @returns {number[]} The sorted array.
 * @remarks
 * Time complexity: O(n^2), where n is the number of elements in the array.
 */
function bubbleSort(arr) {
    let outerLen = arr.length;
    for (let i = 0; i < outerLen; i++) {
        let innerLen = outerLen - i - 1;
        for (let j = 0; j < innerLen; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

/**
 * Optimized bubble sort algorithm that sorts an array of numbers in ascending order.
 * @param {number[]} arr - The array to sort.
 * @returns {number[]} The sorted array.
 * @remarks
 * Best case time complexity: O(n), when the array is already sorted. (It will also be faster than O(n^2) if it is almost sorted)
 * Worst case time complexity: O(n^2), when the array is sorted in reverse.
 * Average case time complexity: O(n^2), for an array of n unsorted elements.
 */
const bubbleSortV2 = (array) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    } while(swapped);
    return array;
}

console.log(bubbleSortV2([64, 34, 25, 12, 22, 11, 90])); // Output: [11, 12, 22, 25, 34, 64, 90]