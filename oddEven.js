// Create a function that goes through the array, incrementing (+1) 
// for each odd element and decrementing (-1) for each even number.

function transform(arr) {
    for (let i = 0; i < arr.length; i++) {
        (arr[i] % 2 !== 0) ? arr[i]++ : arr[i]--;
    }
    return arr;
}