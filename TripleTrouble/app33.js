/*Triple Trouble
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.*/

function tripleTrouble(one, two, three) {
    const arr = []; //creating a new array to store the values

    for (let i = 0; i < one.length; i++) {
        arr.push(one[i], two[i], three[i]);
    }
    return arr.join('');
}

//alternative for loop

function tripleTrouble1(one, two, three) {
    let str = ''; //creating an empty string to hold the new values
    for (let i = 0; i < one.length; i++) {
        str += one[i] + two[i] + three[i];
    }
    return str;
}

//Using an arrow function with the map() function

const tripleTrouble2 = (one, two, three) =>
    one
        .split('')
        .map((letter, index) => letter + two[index] + three[index])
        .join('');
