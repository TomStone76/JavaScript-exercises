// Write a function countBs that takes a string as its only argument and 
// returns a number that indicates how many uppercase “B” characters there are in the string.

// Next, write a function called countChar that behaves like countBs, 
// except it takes a second argument that indicates the character that is to be counted 
// (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

// function countBs(str) {
//     let counter = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "B") {
//             counter++;
//         }
//     }
//     return counter;
// }

function countChar(str, charName) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === charName) {
            counter++
        }
    }
    return counter;
}

function countBs(str) {
    return countChar(str, "B");
}

console.log(countBs("BBC"));

console.log(countChar("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in purus congue, commodo leo at, varius libero. Maecenas ornare nisi ex, vitae blandit ipsum aliquam at. Sed eleifend justo vel sem venenatis vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris congue molestie odio eu placerat. Suspendisse mi nisl, bibendum quis aliquet id, imperdiet quis lectus. Praesent non lectus consectetur, tristique dui sodales, tempor quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl urna, tristique sed lobortis hendrerit, pretium et massa. Cras et faucibus elit, eu placerat mauris. Pellentesque rhoncus turpis vitae sem rhoncus placerat. Proin eget tellus malesuada, gravida est sed, malesuada purus. Fusce nisl nisi, aliquet vel tellus sit amet, sagittis mattis justo.", "e"));