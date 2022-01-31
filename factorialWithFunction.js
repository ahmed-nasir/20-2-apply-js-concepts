function getFectorial(number) {
    let factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
console.log("Fectorial :", getFectorial(4));
console.log("Fectorial :", getFectorial(3));