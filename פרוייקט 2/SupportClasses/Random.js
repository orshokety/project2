var Random = /** @class */ (function () {
    function Random() {
    }
    Random.arrayStr = function (tmp, leng) {
        return tmp[(Math.floor(Math.random() * leng))];
    };
    Random.numberMaxMin = function (max, min) {
        return Math.round(Math.random() * (max - min)) + min;
    };
    Random.numberZeroToMax = function (max) {
        return Math.round(Math.random() * max);
    };
    Random.model = function () {
        var str = "";
        for (var i = 0; i < 9; i++) {
            str += "" + Math.round(Math.random() * 9);
        }
        return str;
    };
    Random.boolean = function () {
        if (Math.round(Math.random()) == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Random.Date = function (start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    };
    return Random;
}());
//# sourceMappingURL=Random.js.map