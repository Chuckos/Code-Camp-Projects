/**
 * Created by charlesadeeko on 14/05/2017.
 *
 * Return the lowest index at which a value (second argument)
 * should be inserted into an array (first argument) once it has been sorted.
 * The returned value should be a number.
 *
 * For example, getIndexToIns([1,2,3,4], 1.5) should return 1
 * because it is greater than 1 (index 0), but less than 2 (index 1).
 *
 * Likewise, getIndexToIns([20,3,5], 19) should return 2
 * because once the array has been sorted it will look like [3,5,20]
 * and 19 is less than 20 (index 2) and greater than 5 (index 1)
 *
 */


function getIndexToIns(arr, num) {

    // Sort the array from lowest to highest
    function compareNumbers(a,b) {
        return a - b;
    }
    console.log('Sorting the array from lowest number to biggest: ', arr.sort(compareNumbers));

    // Check the first number that is bigger than num and return index.
    for (i = 0; i < arr.length; i++) {
        var indexNumber;

        if (arr[i] >= num){

            indexNumber = arr.indexOf(arr[i]);
            console.log(indexNumber);
            return indexNumber;
        }
    }

    // if num is bigger than contents in array, return array length.

    var hope = arr.length;
    console.log(hope);
    return hope;


    /*function biggerNumber(element){
        return element > num;
    }
*/
    //arr.findIndex(biggerNumber);
    //console.log('Scanning through the array to return the index of lowest value', arr.findIndex(biggerNumber));
    //var final = arr.findIndex(biggerNumber);


  //  return final;
}

/*getIndexToIns([10, 20, 30, 40, 50], 35);   // should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30);   // should return 2.
 getIndexToIns([40, 60], 50);               // should return 1.
 getIndexToIns([3, 10, 5], 3);              // should return 0.
 getIndexToIns([5, 3, 20, 3], 5);           // should return 2.
 getIndexToIns([2, 20, 10], 19);            // should return 2.*/
 getIndexToIns([2, 5, 10], 15);             // should return 3.
