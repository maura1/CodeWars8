/*You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

eg. is 5 in [2,4,6] => returns false
    is 6 in [3,4,6,7,2,2] => returns true


    Make a function that takes in tow parameters, an array and a random numbers
*/

function check(a, x) {
    return a.includes(x);
}
console.log(check([1, 2, 3], 3));
console.log(check([2, 3], 4));

//alternative
const check = (a, x) => a.includes(x);
