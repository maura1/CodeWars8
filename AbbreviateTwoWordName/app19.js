/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F*/

//Use toUpperCase() followed by split() which will seperate out the words in any array, then just call the first letter of each word using the bracket notation.

function abbrevName(str) {
    newStr = str.toUpperCase().split(' ');
    return newStr[0][0] + '.' + newStr[1][0];
}

//Using arrow functions
//Split the words and use map to uppercase the first element of each word.
const abbrevName = (str) =>
    str
        .split(' ')
        .map((i) => i[0].toUpperCase())
        .join('.');
