//  The following code implements the insertion sort algorithm.
//  The outer for loop iterates over the array indices,
//  and the inner for loop moves the unsorted items into the sorted sublist
//   on the left side of the array



const insertion_sort = arr => {
    let value,i,j;
    for ( i = 0; i < arr.length; i++) {
        // store the current value because it may shift later
        value = arr[i];
        // Whenever the value in the sorted section is greater than
        // in the unsorted section, shift all items in the sorted
        // over by one. This creates space in which to insert the
        for ( j = i - 1; j > -1 && arr[j] > value; j--) {
            arr[j + 1] = arr[j];
        };
        arr[j + 1] = value;
    }
    return arr;
}