// Create a function that takes the month and year (as integers)
// and returns the number of days in that month.

function days(month, year) {
    let monthConv = month - 1
    let first = new Date(year, monthConv)
    let second = new Date(year, monthConv + 1)

    return year >= 1970 ?
    Math.round((second - first) / (1000*60*60*24))
    : Math.round((second.setFullYear(year) - first.setFullYear(year)) / (1000*60*60*24))
}