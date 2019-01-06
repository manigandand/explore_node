var counter = function (arr) {
    return 'There are ' + arr.length + ' elements in this array';
};

var sum = function (a, b) {
    return `The sum of ${a} and ${b} is ${a+b}`;
};

var pi = 3.142;

module.exports = {
    counter: counter,
    sum: sum,
    pi: pi,
};