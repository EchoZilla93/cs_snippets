const swap = (arr, indx1, indx2) => {
    let temp = arr[indx1];
    arr[indx1] = arr[indx2];
    arr[indx2] = temp;
}

const selectionSort = arr => {
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
        // set minimum to this position
        min = i;
        //check the rest of the array to see if anything is smaller»
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
            //if the minimum isn't in the position, swap it»
            if (i != min) swap(arr, i, j)
        }
    }
    return arr
}