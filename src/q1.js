/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if either x or y is not numeric.
    - print the swapped values in the console if both x and y are numeric.
    
    Task 2
    - invoke the function "swap" using the following scenarios:
    - "Apple", 10
    - 9, 17
*/

function swap(x, y){
    // Task 1: Add code here

    // Check if x and y are both numeric,
    // return -1 if either x or y is not numeric
    if (isNaN(x) || isNaN(y)) {
        console.log("Either x = " + x + " or y = " + y + " is not numeric, unable to swap values\n");
        return -1;
    } else {
        console.log("x = " + x + ", y = " + y);
    }

    // swap the values of x and y using only x and y as variables
    [x, y] = [y, x];

    console.log("After swapping values:")
    console.log("x = " + x + ", y = " + y +"\n");
}

// Task 2: Add code here

swap("Apple", 10);
swap(9, 17);
