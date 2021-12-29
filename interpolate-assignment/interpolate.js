// Function to replace delimiter with empty space
const replaceString = (options, str, check, leftResult, rightResult) => {

    if (check) {
        if (str.includes(leftResult)) {
            var thirdDivide = str.replace(leftResult, " ")
            if (thirdDivide.includes(rightResult)) {
                var fourthDivide = thirdDivide.replace(rightResult, " ")
                if (fourthDivide != undefined)
                    return fourthDivide;
            }
            else {
                return thirdDivide;
            }
        }
    }
    else {
        if ((str.includes(leftResult))) {
            var thirdDivide = str.replaceAll(leftResult, "");
            if (leftResult === rightResult) {
                return thirdDivide;
            }
            else {
                if (thirdDivide.includes(rightResult)) {
                    var fourthDivide = thirdDivide.replaceAll(rightResult, "")
                    if (fourthDivide != undefined)
                        return fourthDivide;
                }
                else {
                    return str;
                }
            }
        }
    }
}

const interpolate = (value, session = {}, options = {}) => {
    let leftResult = options.leftDelimiter;
    let rightResult = options.rightDelimiter;
    let firstDivide = value.split(/(?:,| )+/).map((secondDivide) => {
        return replaceString(options, secondDivide, true, leftResult, rightResult);
    });
    data = firstDivide.filter(function (element) { return element !== undefined; }).map(part => part.trim());
    value = data.map((result) => {
        if (value.includes(result) && value.includes(leftResult) && value.includes(rightResult)) {
            if (session[result] !== undefined) {
                value = value.replace(result, session[result]);
            }
            else {
                value = value.replace(result, "");
            }
        }
        return value;
    })
    let finalStr = value[value.length - 1];
    const expectedOutput = replaceString(options, finalStr, false, leftResult, rightResult);
    return expectedOutput;
};


// interpolate(value, session, options);
module.exports = { interpolate }