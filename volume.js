// Given an array of boxes, write a function that returns the total volume of all those boxes combined together. 
// A box is represented by an array with three elements: length, width and height.

// For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) 
// should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.

function totalVolume(...boxes) {   
return boxes[0].reduce((a, b) => a * b)+
       boxes[1].reduce((a, b) => a * b)+
       boxes[2].reduce((a, b) => a * b)
}

console.log(totalVolume([2, 2, 2], [2, 1, 1]));