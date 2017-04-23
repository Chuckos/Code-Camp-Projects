/**
 *
 * Check if a string (first argument, str) ends with the given target string (second argument, target)
 *
 *
 */

// use function endsWith to complete challenge
function confirmEnding(str, target) {

    str = str.endsWith(target);

    return str;
}

confirmEnding("Bastian", "n"); // true
confirmEnding("Connor", "n"); //false
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"); //false
confirmEnding("He has to give me a new name", "name"); //true
confirmEnding("Open sesame", "same"); //true
confirmEnding("Open sesame", "pen"); //false
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"); //false



function confirmEnding1(str, target) {

    //count number of characters in main string and second string
    var a = str.length;
    var b = target.length;

    //Find reference point in string to get last characters to compare with target
    var c = a - b;


    //use starting point from variable c to get the characters to compare
    var can = str.substr(c);


    //compare str and target to see if characters end the same or not
    if (can === target) {
        return true;
    } else {
        return false;
    }
}

confirmEnding1("Bastian", "n"); // true
confirmEnding1("Connor", "n"); //false
confirmEnding1("Walking on water and developing software from a specification are easy if both are frozen", "specification"); //false
confirmEnding1("He has to give me a new name", "name"); //true
confirmEnding1("Open sesame", "same"); //true
confirmEnding1("Open sesame", "pen"); //false
confirmEnding1("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"); //false