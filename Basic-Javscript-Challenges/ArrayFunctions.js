/**
 * Created by charlesadeeko on 16/04/2017.
 */

//Iterate over Arrays with map
var oldArray = [1,2,3,4,5];

// Only change code below this line.

var newArray = oldArray.map(function(val){
    return val + 3;
});


//Condense arrays with reduce
var array = [4,5,6,7,8];
var singleVal = 0;

// Only change code below this line.

singleVal  = array.reduce(function(previousVal, currentVal){
    return previousVal + currentVal;

}, 0);



//Filter Arrays with filter
var oldArray = [1,2,3,4,5,6,7,8,9,10];

// Only change code below this line.

var newArray = oldArray.filter(function(val){
    return val <= 5;
});

//Sort Arrays with sort
var array = [1, 12, 21, 2];

// Only change code below this line.

array.sort(function(a, b){
    return b - a;
});

//Reverse Arrays with reverse
var array = [1,2,3,4,5,6,7];
var newArray = [];

// Only change code below this line.

newArray = array.reverse();

//Concatenate Arrays with concat
var oldArray = [1,2,3];
var newArray = [];

var concatMe = [4,5,6];

// Only change code below this line.

newArray = oldArray.concat(concatMe);


//Split Strings with split
var string = "Split me into an array";
var array = [];

// Only change code below this line.

array = string.split(' ');

//Join Strings with join
var joinMe = ["Split","me","into","an","array"];
var joinedString = '';

// Only change code below this line.

joinedString = joinMe.join(" ");

