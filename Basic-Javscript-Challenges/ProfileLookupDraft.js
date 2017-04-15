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

    for (var i=0; i < contacts.length; i++) {

        //The function should check if firstName is an actual contact's firstName
        if (contacts[i].firstName === firstName) {

            //given property (prop) is a property of that contact
            if (contacts[i].hasOwnProperty(prop)) {
                console.log(contacts[i][prop]);
                return contacts[i][prop];
            }

            console.log("No such property");
            return "No such property";

        }



    }

    console.log("No such contact");
    return "No such contact";


// Only change code above this line
}

// Change these values to test your function
//lookUpProfile("Akira", "likes");
//lookUpProfile("Bob", "number");
lookUpProfile("Akira", "address");
//lookUpProfile("Kristian", "lastName");
//lookUpProfile("Harry", "likes");
//lookUpProfile("Sherlock", "likes");
