const pi = 3.14;
const mean = (arr) => {
    if (arr.length === 0) {
        return 0;
    }
    let sum = 0;
    arr.forEach((element) => {
        sum += element;
    });
    return sum / arr.length;
};

module.exports = {
    pi,
    mean,
};