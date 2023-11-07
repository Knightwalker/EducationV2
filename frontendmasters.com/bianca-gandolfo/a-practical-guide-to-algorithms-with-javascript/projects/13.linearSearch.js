const linearSearch = (list, item) => {
    let index = -1;
    const length = list.length;
    for (let i = 0; i < length; ++i) {
        if (list[i] === item) {
            index = i;
        }
    }
    return index;
}

console.log(linearSearch([2,6,7,90,103], 90));