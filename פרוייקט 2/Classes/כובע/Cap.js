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
var Cap = /** @class */ (function (_super) {
    __extends(Cap, _super);
    function Cap(logo, diameter, maker, model, size, price, color) {
        var _this = _super.call(this, diameter, maker, model, size, price, color) || this;
        _this.logo = logo;
        Cap.counter++;
        return _this;
    }
    Cap.prototype.displayDetials = function () {
        var div = document.createElement("DIV");
        document.body.appendChild(div);
        div.id = "Cap" + Cap.counter;
        div.className = "inDiv";
        Printer.divQueryId = div.id;
        Printer.printDetailsAndBR("\u05DB\u05D5\u05D1\u05E2 \u05E7\u05E1\u05E7\u05D8");
        Printer.printDetailsAndBR("\u05D9\u05E6\u05E8\u05DF:" + this.maker);
        Printer.printDetailsAndBR("\u05D3\u05D2\u05DD:" + this.model);
        Printer.printDetailsAndBR("\u05DE\u05D9\u05D3\u05D4:" + this.size);
        Printer.printDetailsAndBR("\u05DE\u05D7\u05D9\u05E8:" + this.price + " \u05E9\u05E7\u05DC\u05D9\u05DD");
        Printer.printDetailsAndBR("\u05E6\u05D1\u05E2:" + this.color);
        Printer.printDetailsAndBR("\u05E7\u05D5\u05D8\u05E8:" + this.diameter + " \u05E1\"\u05DE");
        Printer.printDetailsAndBR("\u05D4\u05D3\u05E4\u05E1:" + (this.logo ? "יש הדפס" : "אין הדפס"));
        Printer.printDetailsAndBR("\u05DE\u05D7\u05D9\u05E8 \u05DC\u05DC\u05D0 \u05DE\u05E2\"\u05DE:" + ItemA.getPriseWithoutVat(this.price) + " \u05E9\u05E7\u05DC\u05D9\u05DD");
        return div;
    };
    Cap.prototype.displayImage = function () {
        var img = new Image();
        img.src = "Images/כובע קסקט.jpg";
        img.id = "CapImg" + Cap.counter;
        img.className = "imgInDiv";
        document.body.appendChild(img);
        return img;
    };
    Object.defineProperty(Cap.prototype, "brand", {
        get: function () {
            return "\u05D9\u05E6\u05E8\u05DF:" + this.maker + ", \u05D3\u05D2\u05DD:" + this.model;
        },
        enumerable: true,
        configurable: true
    });
    return Cap;
}(HatA));
//# sourceMappingURL=Cap.js.map