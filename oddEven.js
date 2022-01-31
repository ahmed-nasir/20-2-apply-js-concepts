function isOdd(number) {
    var reminder = number % 2;
    if (reminder == 0) {
        return true;
    }
    return false;
}
var yourNumber = 34;
var result = isOdd(yourNumber);

console.log(yourNumber, "Is odd ? ", result);