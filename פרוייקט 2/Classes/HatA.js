var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HatA = /** @class */ (function (_super) {
    __extends(HatA, _super);
    function HatA(diameter, maker, model, size, price, color) {
        var _this = _super.call(this, maker, model, price, color) || this;
        _this.errSTR = "\u05D4\u05D5\u05D6\u05DF \u05E2\u05E8\u05DA \u05E9\u05D2\u05D5\u05D9 \u05D1\u05E7\u05D5\u05D8\u05E8";
        _this.Diameter = diameter;
        _this.Size = size;
        return _this;
    }
    Object.defineProperty(HatA.prototype, "Diameter", {
        set: function (diameter) {
            try {
                if (diameter >= 15 && diameter <= 30) {
                    this.diameter = diameter;
                }
                else {
                    throw this.errSTR;
                }
            }
            catch (e) {
                console.log(e);
            }
        },
        enumerable: true,
        configurable: true
    });
    return HatA;
}(ItemA));
//# sourceMappingURL=HatA.js.map