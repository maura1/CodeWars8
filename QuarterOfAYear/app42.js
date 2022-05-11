/*Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter*/

//arrow function using the tenary operator
const quarterOf = (month) =>
    month === 1 || month === 2 || month === 3
        ? 1
        : month === 4 || month === 5 || month === 6
        ? 2
        : month === 7 || month === 8 || month === 9
        ? 3
        : 4;

//arrow function using Math.ceil
const quarterOf1 = (month) => Math.ceil(month / 3);
