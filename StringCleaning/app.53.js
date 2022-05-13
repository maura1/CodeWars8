/*Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'*/

//Using arrow function and filter()
const stringClean = (s) =>
    s
        .split('')
        .filter((n) => n != parseInt(n))
        .join('');

//d removes the digits
function stringClean(s) {
    return s.replace(/\d*/g, '');
}
