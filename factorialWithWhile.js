// function getFactorial(number) {
//     let factorial = 1;
//     let i = 1
//     while (i <= number) {
//         factorial = factorial * i;
//         i++

//     }
//     return factorial;
// }
// console.log(getFactorial(4));




function getFactorial(num) {
    let factorial = num;
    let i = 1;
    while (i >= 1) {
        factorial = factorial * num;
        i--;
    }
    return factorial;
}
console.log(getFactorial(4));
