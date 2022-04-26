/*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
#The order of the words needs to be maintained, just the letters of each word should be reversed*/

//split it into an array of words, split each word, reverse and join and join the words into a sentence again
const reverseWords = (str) =>
    str
        .split(' ')
        .map((word) => word.split('').reverse().join(''))
        .join(' ');
