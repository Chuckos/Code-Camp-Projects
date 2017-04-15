/**
 * Created by charlesadeeko on 14/04/2017.
 */

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){

    //The function should check if firstName is an actual contact's firstName
    // given property (prop) is a property of that contact.

    for (var i=0; i < contacts.length; i++) {
        var firstNameMatch = contacts[i].firstName === firstName;
        console.log(firstNameMatch);
    }

    for (var i=0; i < contacts.length; i++)
     var isPropertyTrue = contacts[i].hasOwnProperty(prop);

     console.log(firstNameMatch);
     console.log(isPropertyTrue);


     //   If both are true, then return the "value" of that property.

   /*     if (firstNameMatch === true && isPropertyTrue === true){
            var test = prop;
            var test2 = contacts[i].likes;

            console.log(test);
            console.log(test2);
            return contacts[prop];

        } else if ( firstNameMatch !== true){

            return "No such contact";

        } else {
            
            return "No such property";
        }
*/




 /*   var firstNameVariable = firstName;
    var lookUpFirstName = contacts.firstName;

    // Only change code below this line

    if () {

        // return value of that property

    } else if () {

        return "No such contact";

    } else {

        return "No such property";

    }*/

// Only change code above this line
}

// Change these values to test your function
//lookUpProfile("Akira", "likes");
//lookUpProfile("Bob", "number");
//lookUpProfile("Akira", "address");
lookUpProfile("Kristian", "lastName");
