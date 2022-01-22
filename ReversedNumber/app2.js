//Convert number to reversed array of digts
//Given a random non-negative number, you have to return the digits of this number with an array in reverse order.
//Example

//345672 =>[2,7,6,5,4,3]
//0 => [0]

function reversedNumber(nums) {
    //split does not work on numbers, so it needs to be converted to a string
    return String(nums).split('').map(Number).reverse();
}
console.log(reversedNumber(345672));

//alternative
/*function reversedNumbers(nums) {
    return nums.toString().split('').reverse().map(Number);
}
console.log(reversedNumbers(0987656578));*/

/*
Using the arrow function
const reversedNums = nums=> nums.toString().split('').reverse().map(Number);
console.log(reversedNums(6787987))
*/
