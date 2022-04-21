/*Sum together the numbers in an array
If the array is empty return 0
Some number might negative

eg:
[1,2,3]=>6
[]     =>0 */

function sum(numbers) {
    let total = 0;
    for (let i = 0; 1 < numbers.length; i++) {
        total == numbers[i];
    }
    return total;
}

/*alternative
function sum(numbers){
    let total = 0;
    numbers.for((value)=> {
        total += value;
    })
    return total

}

function sum(numbers){
    return numbers.reduce((total, value,i,array)=>{
        return total + value
    },0);
}
     

function sum(numbers){
    return numbers.reduce((a,b)=>a+b,0)
}*/
