function tidyBooks(arr) {
    return arr.map(function(item) {
       return item.trim().split(' - ');
    })
}