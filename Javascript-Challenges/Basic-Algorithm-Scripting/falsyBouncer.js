/**
 * Created by charlesadeeko on 07/05/2017.
 *
 * Remove all falsy values from an array.
 * Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 *
 */


function bouncer(arr) {

    // function to return only true variables
    function isTruthy(obj){
        return Boolean(obj);
    }

    // filters through array and filters out falsy variables
    var filteredArray = arr.filter(isTruthy);

    // return true variables
    return filteredArray;
}

/*

// advanced way to solve problem.
function bouncer(arr) {
    return arr.filter(Boolean);
}
*/

bouncer([7, "ate", "", false, 9]);                  //should return [7, "ate", 9].
bouncer(["a", "b", "c"]);                           // should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]);      //should return [].
bouncer([1, null, NaN, 2, undefined]);              // should return [1, 2]