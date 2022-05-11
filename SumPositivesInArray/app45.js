/*You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.*/

// Using the for loop
function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) sum += arr[i];
    }
    return sum;
}
//Using arrow function and reduce()
const positiveSum3 = (arr) =>
    arr.reduce((acc, num) => (num > 0 ? acc + num : acc), 0);

//Using arrow function, reduce() and filter()
const positiveSum = (arr) =>
    arr
        .filter((number) => number > 0)
        .reduce((accumulator, current) => accumulator + current, 0);
