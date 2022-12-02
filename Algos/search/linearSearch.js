const linearSearch = (arr, item) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) return true;
    }
    return false;
};
linearSearch([1,22,33,4,52,12,90,30],30);