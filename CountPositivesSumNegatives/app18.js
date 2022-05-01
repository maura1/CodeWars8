/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].*/

//Check if the input is not an array or if the array is empty, return an empty array. Make a variable, an array with two elements.The first element will contain the total count of positive variables, the second will have the sum of negetive numbers. Iterate through each element of the array using forEach and eiter add to element [0] or [1] depending on if the element is positive or negative.

function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
        return [];
    }
    const result = [0, 0];
    input.forEach((a) => (a > 0 ? result[0]++ : (result[1] += a)));
    return result;
}
