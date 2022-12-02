const swap = (arr, indx1, indx2) => {
    let temp = arr[indx1];
    arr[indx1] = arr[indx2];
    arr[indx2] = temp;
}
const bubbleSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (arr[i] < arr[j]){
                swap(arr, i, j)
            }
        }
    }
    return arr;
}

 bubbleSort([6,1,2,3,4,5]);