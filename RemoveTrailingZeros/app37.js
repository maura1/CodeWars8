/*Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway*/

//Using the while loop, if n is < than 9 the loop will stop
function noBoringZeros(n) {
    while (Math.abs(n) > 9 && n % 10 === 0) {
        n /= 10;
    }
    return n;
}

//recursive
function noBoringZeros(n) {
    return n % 10 || n === 0 ? n : noBoringZeros(n / 10);
}
