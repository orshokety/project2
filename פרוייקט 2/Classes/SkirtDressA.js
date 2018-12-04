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
var SkirtDressA = /** @class */ (function (_super) {
    __extends(SkirtDressA, _super);
    function SkirtDressA(scope, maker, model, size, price, color) {
        var _this = _super.call(this, maker, model, price, color) || this;
        _this.errSTR = "\u05D4\u05D5\u05D6\u05DF \u05E2\u05E8\u05DA \u05E9\u05D2\u05D5\u05D9 \u05D1\u05D4\u05D9\u05E7\u05E3 \u05D4\u05E9\u05DE\u05DC\u05D4/\u05D7\u05E6\u05D0\u05D9\u05EA";
        _this.Scope = scope;
        _this.Size = size;
        return _this;
    }
    Object.defineProperty(SkirtDressA.prototype, "Scope", {
        set: function (scope) {
            try {
                if (scope >= 60 && scope <= 100) {
                    this.scope = scope;
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
    Object.defineProperty(SkirtDressA.prototype, "Price", {
        set: function (prise) {
            if (prise > 100 || prise < 300) {
                this.price = prise;
            }
            else {
                throw new Error(this.errPriseSTR);
            }
        },
        enumerable: true,
        configurable: true
    });
    return SkirtDressA;
}(ItemA));
//# sourceMappingURL=SkirtDressA.js.map