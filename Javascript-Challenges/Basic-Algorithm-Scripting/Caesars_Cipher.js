/**
 * Created by charlesadeeko on 22/05/2017.
 *
 * One of the simplest and most widely known ciphers is a Caesar cipher,
 * also known as a shift cipher. In a shift cipher the meanings of the letters
 * are shifted by some set amount.
 *
 * A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
 * Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
 * Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 * All letters will be uppercase. Do not transform any non-alphabetic character
 * (i.e. spaces, punctuation), but do pass them on.
 *
 */


function rot13(str) {

    // Split str into a character array
    return str.split('')

    //Iterate over each cahracter in the arry
    .map.call(str, function(char){

        //convert char to a character code
        x = char.charCodeAt(0);

        //Checks if character lies between A-Z
        if (x < 65 || x > 90) {
            return String.fromCharCode(x); // Return un-converted character
        }

        // N = ASCII 78, if the character code is less than 78, shift forward 13 places
        else if (x < 78) {
            return String.fromCharCode(x +13);
        }
        // otherwise shift the character 13 places  backward
        return String.fromCharCode(x - 13);
    }).join(''); // rejoin the array into a string

}

// Change the inputs below to test
rot13("SERR PBQR PNZC");                                //should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!");                                   //should decode to "FREE PIZZA!"
rot13("SERR YBIR?");                                    //should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."); //should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
