/**
 * Created by charlesadeeko on 14/04/2017.
 */
function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line

    for (var i = 0; i < arr.length; i++) {
        for (var j =0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }

    // Only change code above this line
    console.log(product);
    return product;

}

// Modify values below to test your code
multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]]);
