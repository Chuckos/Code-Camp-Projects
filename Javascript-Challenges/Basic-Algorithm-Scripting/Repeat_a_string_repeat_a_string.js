/**
 *
 * Repeat a given string (first argument) num times (second argument)
 * Return an empty string if num is not a positive number.
 *
 *
 */


function repeatStringNumTimes(str, num) {
    // repeat after me

    var resultString;

    //check if number is postive or negative
    if (num >= 0) {

        //duplicate the string and return by given number
        resultString = str.repeat(num);
        return resultString;

    } else {

        //return empty array if number is negative
        resultString = "";
        return resultString;
    }
}

repeatStringNumTimes("*", 3);    //should return "***".
repeatStringNumTimes("abc", 3);  //should return "abcabcabc".
repeatStringNumTimes("abc", 4);  //should return "abcabcabcabc".
repeatStringNumTimes("abc", 1);   //should return "abc".
repeatStringNumTimes("*", 8);    // should return "********".
repeatStringNumTimes("abc", -2); // should return ""