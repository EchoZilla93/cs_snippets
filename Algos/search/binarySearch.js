const binarySearch = (arr, item) => {
    let start = 0;
    let end = arr.length;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === item) {
            return mid
        } else if (arr[mid] > item) {
            start = mid
        } else {
            end = mid
        }
    }
    return -1
}

linearSearch([1,22,33,4,52,12,90,30],30);