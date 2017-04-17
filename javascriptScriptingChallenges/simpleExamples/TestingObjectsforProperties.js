/**
 * Created by charlesadeeko on 11/04/2017.
 */


/* Modify the function checkObj to test myObj for checkProp.
 If the property is found, return that property's value.
 If not, return "Not Found". */

// Setup
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    // Your Code Here
    var test =  myObj.hasOwnProperty(checkProp);
    var test2 = checkProp;

    if (test === true) {
        return myObj[test2];

    } else {

        return "Not Found";
    }


}

// Test your code by modifying these values
checkObj("pet");