// Given an array of numbers, write a function that returns an array that...
// Has all duplicate elements removed.
// Is sorted from least to greatest value.

function uniqueSort(arr) {
    var sorted = arr.sort(function(a, b){return a - b});
    let duplicates = sorted.filter(function(x, y) {
        return sorted.indexOf(x) >= y;
    });
    return duplicates
}