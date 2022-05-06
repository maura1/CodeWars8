/*Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)*/
function generateRange(min, max, step) {
    let arr = [];
    for (let i = min; i <= max; i += step) {
        arr.push(i);
    }
    return arr;
}
//Using the arrow function and spread operator
const generateArray = (min, max, step) =>
    min > max ? [] : [min, ...generateArray(min + step, max, step)];
