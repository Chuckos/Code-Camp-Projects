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

// Using split function to complete challenge

/*function titleCase(str) {

    //1. make string all lower case
    var sentence = str.toLowerCase();


    //2. split string into an array
    //var sentence1 = sentence.split('');
    //console.log(sentence1);

    var sentence1 = sentence.replace(/\b(\w)/g,"").toUpperCase();
    console.log(sentence1);


    //3 .iterate through array
    /!*for (i = 0; i < sentence1.length; i++) {
        console.log(sentence1[i]);
    }*!/


    //4. make first letter of each word capital (charAT).


    //5. covert back to string with spaces

    //6. return string.



    return str;
}*/


// Using Regular Expression function to complete challenge

function titleCase(str) {

    //regex to find first letter in each work.
    var capWords = str.toLowerCase().replace(/(^|\s)[a-z]/g, function(upperCase){return upperCase.toUpperCase();});

    console.log(capWords);

    return capWords;
}



titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");