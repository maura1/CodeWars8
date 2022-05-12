/*An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)*/

//When the str is converted to a set it will have all unique letters. If it is then the same size as the origional str then this confirms the the origional string also consists of unique letters which makes it an isogram
const is = (str) => new Set(str.toLowerCase()).size == str.length;
