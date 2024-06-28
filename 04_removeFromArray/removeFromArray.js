const removeFromArray = function(inputList, ...args) {
    let newList = [];
    for (item of inputList) {
        if (!args.includes(item)) {
            newList.push(item);
        }
    }
    return newList;
};

// Do not edit below this line
module.exports = removeFromArray;
