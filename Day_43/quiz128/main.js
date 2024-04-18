var multiple = function () {
    var value = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        value[_i] = arguments[_i];
    }
    return value.reduce(function (a, b) { return a * b; }, 1);
};
console.log(multiple(5, 9, 3));
