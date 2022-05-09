/*Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"*/

//Using the for loop and includes()
function replace(s) {
    let str = '';
    let vowel = 'aeiouAEIOU';
    for (let i = 0; i < s.length; i++) {
        if (vowel.includes(s[i])) {
            str += '!';
        } else {
            str += s[i];
        }
    }
    return str;
}

//Using split(), map(),join()
function replace1(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return s
        .split('')
        .map((item) => (vowels.includes(item) ? '!' : item))
        .join('');
}

//Using arrow function
const replace = (s) =>
    s
        .split('')
        .map((item) => ('aeiouAEIOU'.includes(item) ? '!' : item))
        .join('');
