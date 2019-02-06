// Create a function that takes the month and year (as integers)
// and returns the number of days in that month.

function days(month, year) {
    let monthConv = month - 1
    let first = new Date(year, monthConv)
    let second = new Date(year, monthConv + 1)

    if (year >= 1970) {
        return Math.round((second - first) / (1000 * 60 * 60 * 24))
    }
    else if (year < 1970) {
        return Math.round((second.setFullYear(year) - first.setFullYear(year)) / (1000 * 60 * 60 * 24))
    }
}
console.log(days(2, 200))





// two - one = difference in milliseconds
//(two - one) / 1000 = difference in seconds
// ((two - one) / 1000) / 60 = difference in minutes
// ((two - one) / 1000) / 60) / 60 = difference in hours
// (((two - one) / 1000) / 60) / 60) / 24 = days