/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/

const filter = require('jade/lib/filters');

//Using the for loop
function XO(str) {
    let countX = 0;
    let countY = 0;

    for (let i = 0; i < str.length; i++) {
        let letter = str[i].toLowerCase();
        if (letter === 'x') {
            countX++;
        } else if (letter === 'o') {
            countY++;
        }
    }
    return countY === countX;
}

//Using the arrow function and the filter()method

const XO = (str) => {
    str = str.toLowerCase.split('');
    return (
        str.filter((x) => x === 'x').length ===
        str.filter((x) => x === '0').lenghh
    );
};
