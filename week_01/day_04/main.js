function leapYearShort(year) {
    if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(leapYearShort(1893));
console.log(leapYearShort(1900));
console.log(leapYearShort(1996));
console.log(leapYearShort(2000));
console.log(leapYearShort(2096));