// Create a function that takes a number (from 1 to 12) and 
// return its corresponding month name as a string.

function month_name(num) {
    var monthArr = ["", "January", "February", "March", "April", "May", 
    "June", "July", "August", "September", "October", "November", "December"];
    for (var i = 0; i < monthArr.length; i++) {
        return(monthArr[num]);
    }
}