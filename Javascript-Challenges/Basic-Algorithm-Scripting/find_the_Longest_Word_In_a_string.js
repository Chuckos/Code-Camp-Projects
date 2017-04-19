/**
 * Created by charlesadeeko on 18/04/2017.
 */

/** Challenge
 *
 * Return the length of the longest word in the provided sentence.
 * Your response should be a number.
 *
 */

// 1st First Attempt
/*function findLongestWord(str) {

    var wordArray;
    var numberArray = [];
    var largestNumber = 0;


    //Split received words into an array
    wordArray = str.split(" ");

    //Count and store each word length in a new array.
    for (i = 0; i < wordArray.length; i++) {

        // store word number in an variable
        var test = wordArray[i].length;

        // push variable number into a new array
        numberArray.push(test);
        }

    // loop through number array to find largest number
    for (i = 0; i < numberArray.length; i++) {
        if(numberArray[i] > largestNumber) {
            largestNumber = numberArray[i];
        }
    }

    // str = largest number in array
    str = largestNumber;

    return str;
}*/


// 2nd Attempt - Refactored, less code
/*function findLongestWord(str) {

    var wordArray;
    var largestNumber = 0;

    //Split received words into an array
    wordArray = str.split(" ");

    //Count and store each word length in a new array.
    for (i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > largestNumber) {
            largestNumber = wordArray[i].length;
        }
    }
    return largestNumber;
}*/

// 3rd attempt - refactored code using function maths max
function findLongestWord(str) {

    var wordArray;
    var numberArray =[];
    var largestNumber;

    //Split received words into an array
    wordArray = str.split(" ");

    //Count and store each word length in a new array.
    for (i = 0; i < wordArray.length; i++) {
        var test = wordArray[i].length;
        numberArray.push(test);
    }

    //Count and store each word length in a new array.
    largestNumber = Math.max.apply(null, numberArray);
    return largestNumber;
}


findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("May the force be with you");
findLongestWord("Google do a barrel roll");
findLongestWord("What is the average airspeed velocity of an unladen swallow");
findLongestWord("What if we try a super-long word such as otorhinolaryngology");
