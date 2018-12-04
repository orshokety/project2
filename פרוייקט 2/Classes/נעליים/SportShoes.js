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
var SportShoes = /** @class */ (function (_super) {
    __extends(SportShoes, _super);
    function SportShoes(productiondate, country, laces, maker, model, size, price, color) {
        var _this = _super.call(this, country, maker, model, size, price, color) || this;
        _this.productiondate = productiondate;
        _this.laces = laces;
        return _this;
    }
    SportShoes.prototype.displayDetials = function () {
        var div = document.createElement("DIV");
        document.body.appendChild(div);
        div.id = "SportShoes" + ComfortShoes.counter;
        div.className = "inDiv";
        Printer.divQueryId = div.id;
        Printer.printDetailsAndBR("\u05E0\u05E2\u05DC\u05D9 \u05E1\u05E4\u05D5\u05E8\u05D8");
        Printer.printDetailsAndBR("\u05D9\u05E6\u05E8\u05DF:" + this.maker);
        Printer.printDetailsAndBR("\u05D3\u05D2\u05DD:" + this.model);
        Printer.printDetailsAndBR("\u05DE\u05D9\u05D3\u05D4:" + this.size);
        Printer.printDetailsAndBR("\u05DE\u05D7\u05D9\u05E8:" + this.price + " \u05E9\u05E7\u05DC\u05D9\u05DD");
        Printer.printDetailsAndBR("\u05E6\u05D1\u05E2:" + this.color);
        Printer.printDetailsAndBR("\u05D0\u05E8\u05E5 \u05D9\u05D9\u05E6\u05D5\u05E8:" + this.country);
        Printer.printDetailsAndBR("\u05E9\u05E8\u05D5\u05DB\u05D9\u05DD:" + (this.laces ? "יש שרוכים" : "אין שרוכים"));
        Printer.printDetailsAndBR("\u05EA\u05D0\u05E8\u05D9\u05DA \u05D9\u05D9\u05E6\u05D5\u05E8:" + this.productiondate.toLocaleDateString());
        Printer.printDetailsAndBR("\u05DE\u05D7\u05D9\u05E8 \u05DC\u05DC\u05D0 \u05DE\u05E2\"\u05DE:" + ItemA.getPriseWithoutVat(this.price) + " \u05E9\u05E7\u05DC\u05D9\u05DD");
        return div;
    };
    SportShoes.prototype.displayImage = function () {
        var img = new Image();
        img.src = "Images/נעלי ספורט.jpg";
        img.id = "SportShoesImg" + SportShoes.counter;
        img.className = "imgInDiv";
        document.body.appendChild(img);
        return img;
    };
    Object.defineProperty(SportShoes.prototype, "brand", {
        get: function () {
            return "\u05D9\u05E6\u05E8\u05DF:" + this.maker + ", \u05D3\u05D2\u05DD:" + this.model;
        },
        enumerable: true,
        configurable: true
    });
    return SportShoes;
}(ShoesA));
//# sourceMappingURL=SportShoes.js.map