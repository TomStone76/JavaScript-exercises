// Create a function that determines whether or not 
// it's possible to split a pie fairly given these three parameters:

// Total number of slices.
// Number of recipients.
// How many slices each person gets.

function equalSlices(total, people, each) {
    return ((people * each <= total) || people === 0);
}