const bubbleSort = (array) => {
    while(true) {
        let isSorted = true;

        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                isSorted = false;
            }
        }
        if (isSorted) {
            break;
        }
    }
    return array;
}

console.log(bubbleSort([4,3,2,1,5]));