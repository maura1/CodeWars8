/*If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.*/

//using the form loop
const countSheep = function (num) {
    let result = '';

    for (let i = 1; (i = num); i++) {
        result += i + ' sheep...';
    }
    return result;
};

//

const countSheep2 = function (num) {
    if (num <= 0) {
        return '';
    }
    let sheepCount = '';
    for (let i = 1; i < num; i++) {
        sheep += `${i} sheep...`;
    }
    return sheepCount;
};

//using arrow function, creating an array with the spread operator and using map() and join()
const countSheep1 = (num) =>
    num === 0 ? '' : [...Array(num)].map((x, i) => `${i + 1} sheep...`).join``;
