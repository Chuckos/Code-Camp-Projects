/**
 * Created by charlesadeeko on 19/04/2017.
 */

/**
 *
 * Return the provided string with the first letter of each word capitalized.
 * Make sure the rest of the word is in lower case.
 *
 * For the purpose of this exercise,
 * you should also capitalize connecting words like "the" and "of".
 *
 */

// Using .split function to complete challenge
function titleCase(str) {

    // Make strings all lowercase and store words into an array
    var sentence = str
        .toLowerCase()
        .split(' ');

    // Iterate through array and capitalise first letter of word.
    for (i = 0; i < sentence.length; i++) {

        //split individual word into another array
        sentence[i] = sentence[i].split('');

        // Get first letter back from array and turn into capital
        sentence[i][0] = sentence[i][0].toUpperCase();

        // flip array word back into string into original array.
        sentence[i] = sentence[i].join('');
    }

    // flip array back to string with spaces between words.
    str = sentence.join(' ');

    console.log(str + " using split function");

    return str;
}



// Using Regular Expression to complete challenge
function titleCaseR(str) {

    //regex to find first letter in each work.
    var capWords = str
        .toLowerCase()
        .replace(/(^|\s)[a-z]/g, function(upperCase) {return upperCase.toUpperCase();});

    console.log(capWords + " using regular expression");

    return capWords;
}


// testing function with split function
titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");

// testing function with regular expression
titleCaseR("I'm a little tea pot");
titleCaseR("sHoRt AnD sToUt");
titleCaseR("HERE IS MY HANDLE HERE IS MY SPOUT");