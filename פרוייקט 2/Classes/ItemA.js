var ItemA = /** @class */ (function () {
    function ItemA(maker, model, prise, color) {
        if (maker === void 0) { maker = "\u05DC\u05D0 \u05D4\u05D5\u05D6\u05DF"; }
        if (model === void 0) { model = "\u05DC\u05D0 \u05D4\u05D5\u05D6\u05DF"; }
        if (color === void 0) { color = "\u05DC\u05D0 \u05D4\u05D5\u05D6\u05DF"; }
        this.errSizeSTR = "\u05D8\u05E2\u05D5\u05EA \u05D1\u05D4\u05D6\u05E0\u05EA \u05D4\u05DE\u05D9\u05D3\u05D4";
        this.errPriseSTR = "\u05D8\u05E2\u05D5\u05EA \u05D1\u05D4\u05D6\u05E0\u05EA \u05D4\u05DE\u05D7\u05D9\u05E8";
        this.maker = maker;
        this.model = model;
        this.Price = prise;
        this.color = color;
    }
    ItemA.getPriseWithoutVat = function (price) {
        return Number((price * 0.83).toFixed(2));
    };
    Object.defineProperty(ItemA.prototype, "Size", {
        set: function (size) {
            try {
                if (size >= 0 && size <= 5) {
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
    Object.defineProperty(ItemA.prototype, "Price", {
        set: function (price) {
            try {
                if (price > 100 || price < 300) {
                    this.price = price;
                }
                else {
                    throw this.errPriseSTR;
                }
            }
            catch (e) {
                console.log(e);
            }
        },
        enumerable: true,
        configurable: true
    });
    ItemA.counter = 0;
    return ItemA;
}());
//# sourceMappingURL=ItemA.js.map