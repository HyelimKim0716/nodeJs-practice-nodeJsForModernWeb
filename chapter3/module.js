// 절댓값
exports.abs = function (number) {
    if (number > 0)
        return number;
    else
        return -number;
};

// 원의 넓이
exports.circleArea = function (radius) {
    return radius * radius * Math.PI;
};