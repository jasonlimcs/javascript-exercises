const sumAll = function(start, end) {
    let sum = 0;
    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR"
    else if (start < 0 || end < 0) return "ERROR"
    else if (start < end) {
        for (i = start; i <= end; i++) {
            sum += i;
        }
    } else if (start > end) {
        for (i = end; i <= start; i++) {
            sum += i
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
