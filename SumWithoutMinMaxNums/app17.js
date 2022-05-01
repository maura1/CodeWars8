/*Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.*/

//Use a tenary operator, first check if it is not an array or if the array is empty return 0, otherwise sort the array, use slice to exclude the first and last elements(min and may), sum the elements using reduce.
const sumArray = (arr) =>
    !arr || arr.length === 0
        ? 0
        : arr
              .sort((a, b) => a - b, 0)
              .slice(1, -1)
              .reduce((a, b) => a + b, 0);
