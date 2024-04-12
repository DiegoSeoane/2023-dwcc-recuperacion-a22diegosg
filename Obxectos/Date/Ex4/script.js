function getDaysAndMonth(month, year) {
    let date = new Date(year.toString());
    date.setMonth(month - 1);
    let nextMonth = new Date(year.toString());
    nextMonth.setMonth(month);
    nextMonth.setDate(0);
    console.log(nextMonth.getDate());
}
getDaysAndMonth(3, 2000)