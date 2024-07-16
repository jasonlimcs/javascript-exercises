const fibonacci = function(num) {
    num = Number(num)

    if (num < 0) {
        return 'OOPS'
    };
    
    memo = [0, 1];

    for (let i = 2; i <= num; i++) {
        if (num == 0 || num == 1) {
            memo.push(num)
        } else {
            memo.push(memo[i-1] + memo[i-2])
        }
    };

    return memo[num];
};


// Do not edit below this line
module.exports = fibonacci;
