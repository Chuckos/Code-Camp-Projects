/**
 *
 * Return an array consisting of the largest number from each provided sub-array
 *
 *
 */


/*function largestOfFour(arr) {

    //to store final result
    var finalArray = [];

    //loop through main array
    for (i = 0; i < arr.length; i++) {

        // to store biggest number and resets after second loop is done.
        var biggestNumber = 0;

        //To loop through the array of the array
        for (j = 0; j < arr[i].length; j++) {

        // to find the biggest number in each multidimensional array
        if (arr[i][j] > biggestNumber) {
            biggestNumber = arr[i][j];
        }

        }

        //store biggest number into a new array.
        finalArray.push(biggestNumber);
    }


    arr = finalArray;

    return arr;
}*/

function largestOfFour(mainArray){
    return mainArray.map(function (subArray){
        return subArray.reduce(function (previousLargestNumber, currentLargestNumber){
           return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
        }, 0);

    });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);    // should return [27,5,39,1001]
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]); // should return [9, 35, 97, 1000000]
