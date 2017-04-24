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
    // Clear out that junk in your trunk

    //count string length of str

    // if num is <= 3 then do then add three dots on top of maximum

    // else continue with the main task



    // if str is bigger than num
    // do trim str by num number - 3. //use substring here
    // Also concat...
    // return string

    //if not bigger then reutrn original string.



    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);   //should return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 14);  //should return "Peter Piper...".


truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
//should return "A-tisket a-tasket A green and yellow basket".

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
//should return "A-tisket a-tasket A green and yellow basket".

truncateString("A-", 1); // should return "A...".
truncateString("Absolutely Longer", 2); //should return "Ab...".