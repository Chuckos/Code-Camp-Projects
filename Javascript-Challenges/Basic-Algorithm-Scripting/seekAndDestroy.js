/**
 * Created by charlesadeeko on 13/05/2017.
 *
 * You will be provided with an initial array (the first argument in the destroyer function),
 * followed by one or more arguments.
 * Remove all elements from the initial array that are of the same value as these arguments.
 *
 */

function destroyer(arr) {

    // taking function arguments put into array.
    var args = Array.prototype.slice.call(arguments);
    // remove the array at index 0 to keep values to compare against
    args.splice(0,1);
    // filter remove matching variables
    return arr.filter(function(element){
        // search array of arr with variables from arg using indexOf to match.
       return args.indexOf(element) === -1;
    });

}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);                // should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);             // should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5);                // should return [1].
destroyer([2, 3, 2, 3], 2, 3);                      // should return [].
destroyer(["tree", "hamburger", 53], "tree", 53);   // should return ["hamburger"].