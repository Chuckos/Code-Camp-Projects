/**
 * Created by charlesadeeko on 17/04/2017.
 */


/*
 *
 * Return true if the given string is a palindrome. Otherwise, return false.
 * A palindrome is a word or sentence that's spelled the same way both forward and backward,
 * ignoring punctuation, case, and spacing.
 */


function palindrome(str) {

    //create variable array
    var backwardsString;

    //remove special characters from star
    var cleanString = str.replace(/[^a-z]+/g, "");

    //split the word into array, reverse word and the covert into string
    backwardsString = cleanString.split("").reverse().join('');

    console.log(backwardsString);

    //remove special characters from star


    if (cleanString === backwardsString)
    {return true; }
    else {
     return false;
}

}



//palindrome("eye"); //true
palindrome("_eye"); // true
palindrome("race car"); // true
/*palindrome("not a palindrome"); // false
palindrome("A man, a plan, a canal. Panama"); // true
palindrome("never odd or even"); // true
palindrome("nope"); //false
palindrome("almostomla"); //false
palindrome("My age is 0, 0 si ega ym."); //true
palindrome("1 eye for of 1 eye."); //false
palindrome("0_0 (: /-\ :) 0-0"); //true
palindrome("five|\_/|four"); //false*/
