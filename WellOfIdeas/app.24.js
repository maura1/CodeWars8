/*For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.*/

//Using the switch statement
function well(x) {
    switch (x.filter((item) => item === 'good').length) {
        case 0:
            return 'Fail!';
            break;
        //the switch statement does not allow us to check for two or more outcomes
        case 1:
        case 2:
            return 'Publish!';
            break;
        default:
            return 'I smell a series!';
            break;
    }
}

//Using the arrow function with filter()
const well1 = (arr) => {
    const totalGood = arr.filter((arr) => arr === 'good').length;
    return totalGood < 1
        ? 'Fail!'
        : totalGood < 3
        ? 'Publish!'
        : 'I smell a series!';
};

//Using the reduce()method
function well(x) {
    const count = x.reduce((i, v) => i + (v == 'good'), 0);
    return count ? (count > 2 ? 'I smell a series!' : 'Publish!') : 'Fail!';
}

//Using forEach
const well = (x) => {
    let count = 0;
    x.forEach((v) => v === 'good' && count++);
    return count < 1 ? 'Fail!' : count < 2 ? 'Publish!' : 'I smell a Series!';
};
