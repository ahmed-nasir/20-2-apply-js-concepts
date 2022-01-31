function getFactorial(number) {
    let factorial = 1;
    let i = 1
    while (i <= number) {
        factorial = factorial * i;
        i++

    }
    return factorial;
}
console.log(getFactorial(4));

