/**
 *
 * Write a function that splits an array (first argument)
 * into groups the length of size (second argument)
 * and returns them as a two-dimensional array.
 *
 */



function chunkArrayInGroups(arr, size) {

    // Final array to store number in multi-dimensional
    var completeArray = [];

    // To store numbers in array when sliced.  Variable has to be array.
    var sliced = [];


    //snap shot array by size number and keep iterating
    for (var i=0; i < arr.length; i += size) {

        // store range of array into slice array.
        sliced = arr.slice(i, i + size);

        // push sliced array contents into the complete array.
        completeArray.push(sliced);

        // print contents of complete array
        console.log(completeArray);
    }

    // return array
    return completeArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);            // should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);              // should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);              // should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);              // should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);           // should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);     //should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);     //should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
