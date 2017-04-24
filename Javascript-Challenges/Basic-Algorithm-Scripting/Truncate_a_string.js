/**
 *
 * Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
 * Return the truncated string with a ... ending.
 *
 * Note that inserting the three dots to the end will add to the string length.
 * However, if the given maximum string length num is less than or equal to 3,
 * then the addition of the three dots does not add to the string length in determining the truncated string.
 *
 *
 */


function truncateString(str, num) {

    // count str length
    var strLength = str.length;

    // ensure I got the number index to slice from and include ... in num number
    var numLength = num - 3;

    // number to compare string length
    var magicNumber = 3;

    // checks if num is less than or equal to 3
    if (num <= magicNumber) {

        // cuts words by num value and adds ...
        var shortWord = str.slice(0, num) + "...";

        return shortWord;

    } else {

        // checks if string length is greater than num
        if (strLength > num) {

            // cuts words by num length value and adds ...
            var placeHolder = str.substring(0, numLength) + "...";

            return placeHolder;

        } else {

            //if string length is not bigger than num then original string is returned.
            return str;

        }

    }

}

truncateString("A-tisket a-tasket A green and yellow basket", 11);   //should return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 14);  //should return "Peter Piper...".


truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
//should return "A-tisket a-tasket A green and yellow basket".

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
//should return "A-tisket a-tasket A green and yellow basket".

truncateString("A-", 1); // should return "A...".
truncateString("Absolutely Longer", 2); //should return "Ab...".
