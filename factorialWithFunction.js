function getFectorial(number) {
    let factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
console.log("Fectorial :", getFectorial(4));
console.log("Fectorial :", getFectorial(3));

// Decrise 

function getFact(num) {
    let fact = 1;
    for (let i = num; i >= 1; i--) {
        fact = fact * i;
    }
    return fact;
}
const result = getFact(4);
console.log(result);
