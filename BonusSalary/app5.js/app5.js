/*If the bonus is true return salary*10, otherwise return salary*/

function bonusTime(salary, bonus) {
    return bonus ? `£${10 * salary}` : `£${salary}`;
}
