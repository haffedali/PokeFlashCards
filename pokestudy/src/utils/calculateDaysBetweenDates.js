function calculateDaysBetweenDates(date1, date2){
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
    return diffDays;
}

console.log(calculateDaysBetweenDates(new Date("2022-01-01"), new Date("2022-01-02")));
