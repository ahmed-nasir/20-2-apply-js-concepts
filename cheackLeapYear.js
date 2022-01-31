function findLeapYear(year) {
    if ((year % 4 == 0 && year % 100) || year % 400 == 0) {
        return true;
    }
    return false;

}

console.log("Is your year leapyear: ", findLeapYear(2100));