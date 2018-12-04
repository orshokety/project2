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
var ShoesA = /** @class */ (function (_super) {
    __extends(ShoesA, _super);
    function ShoesA(country, maker, model, size, price, color) {
        var _this = _super.call(this, maker, model, price, color) || this;
        _this.country = country;
        _this.Size = size;
        return _this;
    }
    Object.defineProperty(ShoesA.prototype, "Size", {
        set: function (size) {
            try {
                if (size >= 20 && size <= 46) {
                    this.size = size;
                }
                else {
                    throw this.errSizeSTR;
                }
            }
            catch (e) {
                console.log(e);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoesA.prototype, "Price", {
        set: function (prise) {
            if (prise > 200 || prise < 1000) {
                this.price = prise;
            }
            else {
                throw new Error(this.errPriseSTR);
            }
        },
        enumerable: true,
        configurable: true
    });
    return ShoesA;
}(ItemA));
//# sourceMappingURL=ShoesA.js.map