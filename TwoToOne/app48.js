/*Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"*/

//Using the arrow function, creating a new Array with the Set method which removes the duplicates. For the array the spread method is used on str1, str2, this flattens the array
const longest = (str1, str2) =>
    [...new Set([...str1, ...str2])].sort().join('');
