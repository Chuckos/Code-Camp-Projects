/**
 * Created by charlesadeeko on 17/04/2017.
 */


/* Challenge
 *
 * Return true if the given string is a palindrome. Otherwise, return false.
 * A palindrome is a word or sentence that's spelled the same way both forward and backward,
 * ignoring punctuation, case, and spacing.
 */

/*
 * My solution
 * */

/*function palindrome(str) {

    //variable to capture string into array.
    var backwardsString;

    //Turn string into lowercase
    var lowerCase = str.toLowerCase();

    //remove special characters from string using regular expressions 101
    var cleanString = lowerCase.replace(/[^a-z\d]+/g, "");

    //split the string into array, reverse array and the convert back into string
    backwardsString = cleanString.split("").reverse().join('');

    //print out string
    console.log(backwardsString);



    // compare clean string against backwards clean string.
    if (cleanString === backwardsString)
    {return true; }
    else {
     return false;
}

}*/

/*
* Intermediate solution
* */

function palindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, '');
    for(var i= 0, len = str.length - 1; i < len/2; i++){
        console.log(str);
        if(str[i] !== str[len-i]){
            return false;
        }
    }
    return true;
}

palindrome("eye"); //true
palindrome("_eye"); // true
palindrome("race car"); // true
palindrome("not a palindrome"); // false
palindrome("A man, a plan, a canal. Panama"); // true
palindrome("never odd or even"); // true
palindrome("nope"); //false
palindrome("almostomla"); //false
palindrome("My age is 0, 0 si ega ym."); //true
palindrome("1 eye for of 1 eye."); //false
palindrome("0_0 (: /-\ :) 0-0"); //true
palindrome("five|\_/|four"); //false
