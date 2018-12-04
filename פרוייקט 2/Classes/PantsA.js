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
var PantsA = /** @class */ (function (_super) {
    __extends(PantsA, _super);
    function PantsA(pantsLength, maker, model, size, price, color) {
        var _this = _super.call(this, maker, model, price, color) || this;
        _this.errSTR = "\u05D4\u05D5\u05D6\u05DF \u05E2\u05E8\u05DA \u05E9\u05D2\u05D5\u05D9 \u05D1\u05D0\u05D5\u05E8\u05DA \u05DE\u05DB\u05E0\u05E1\u05D9\u05D9\u05DD";
        _this.PantsLength = pantsLength;
        _this.Size = size;
        return _this;
    }
    Object.defineProperty(PantsA.prototype, "PantsLength", {
        set: function (pantsLength) {
            try {
                if (pantsLength >= 20 && pantsLength <= 80) {
                    this.pantsLength = pantsLength;
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
    return PantsA;
}(ItemA));
//# sourceMappingURL=PantsA.js.map