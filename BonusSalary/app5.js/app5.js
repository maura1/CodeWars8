/*If the bonus is true return salary*10, otherwise return salary*/

function bonusTime(salary, bonus) {
    return bonus ? `£${10 * salary}` : `£${salary}`;
}

//Using arrow functions
const totalPay = (salary, bonus) => (bonus === true ? salary * 10 : salary);
console.log(totalPay(100000, (bonus = true)));
