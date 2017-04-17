/**
 * Created by charlesadeeko on 17/04/2017.
 */


/**
 *
 * Reverse the provided string.
 * You may need to turn the string into an array before you can reverse it.
 * Your result must be a string.
 *
 */

function reverseString(str) {

    var resverseString = str.split('').reverse().join('');

    return resverseString;
}

reverseString("hello");
reverseString("Howdy");
reverseString("Greetings from Earth");
