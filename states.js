// Create a function that filters out an array of state names into two categories based on the second parameter.

// Abbreviations abb
// Full names full

function filterStateNames(arr, type) {
    if (type === 'full') return arr.filter(full => full.length > 2);
    if (type === 'abb') return arr.filter(abb => abb.length === 2);
}