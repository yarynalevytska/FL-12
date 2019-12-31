function isLeapYear(year){
    let date = new Date(year);
    if(isNaN(date)) {
        return 'Invalid Date';
    } else if(((date.getFullYear() % 4 === 0) && 
                (date.getFullYear() % 100 !== 0)) || 
                (date.getFullYear() % 400 === 0)) {
        return date.getFullYear() + ' is a leap year';
    } else {
        return date.getFullYear() + ' is not a leap year';
    }
}

isLeapYear('2020-01-01 00:00:00');