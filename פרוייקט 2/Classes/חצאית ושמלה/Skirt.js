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
var Skirt = /** @class */ (function (_super) {
    __extends(Skirt, _super);
    function Skirt(kindOfSkirt, scope, maker, model, size, prise, color) {
        var _this = _super.call(this, scope, maker, model, size, prise, color) || this;
        _this.errSTRa = "\u05D4\u05D5\u05D6\u05DF \u05E2\u05E8\u05DA \u05E9\u05D2\u05D5\u05D9 \u05D1\u05E1\u05D5\u05D2 \u05D4\u05D7\u05E6\u05D0\u05D9\u05EA";
        _this.errSTR = "\u05D4\u05D5\u05D6\u05DF \u05E2\u05E8\u05DA \u05E9\u05D2\u05D5\u05D9 \u05D1\u05D4\u05D9\u05E7\u05E3 \u05D4\u05D7\u05E6\u05D0\u05D9\u05EA";
        _this.kindOfSkirt = kindOfSkirt;
        Skirt.counter++;
        return _this;
    }
    Skirt.prototype.displayDetials = function () {
        var div = document.createElement("DIV");
        document.body.appendChild(div);
        div.id = "Skirt" + Skirt.counter;
        div.className = "inDiv";
        Printer.divQueryId = div.id;
        Printer.printDetailsAndBR("\u05D7\u05E6\u05D0\u05D9\u05EA");
        Printer.printDetailsAndBR("\u05D9\u05E6\u05E8\u05DF:" + this.maker);
        Printer.printDetailsAndBR("\u05D3\u05D2\u05DD:" + this.model);
        Printer.printDetailsAndBR("\u05DE\u05D9\u05D3\u05D4:" + this.size + " \u05E9\u05E7\u05DC\u05D9\u05DD");
        Printer.printDetailsAndBR("\u05DE\u05D7\u05D9\u05E8:" + this.price);
        Printer.printDetailsAndBR("\u05E6\u05D1\u05E2:" + this.color);
        Printer.printDetailsAndBR("\u05D4\u05D9\u05E7\u05E3:" + this.scope + " \u05E1\"\u05DE");
        Printer.printDetailsAndBR("\u05E1\u05D5\u05D2 \u05D4\u05D7\u05E6\u05D0\u05D9\u05EA:" + (this.kindOfSkirt ? "\u05D0\u05E8\u05D5\u05DB\u05D4" : "\u05E7\u05E6\u05E8\u05D4"));
        Printer.printDetailsAndBR("\u05DE\u05D7\u05D9\u05E8 \u05DC\u05DC\u05D0 \u05DE\u05E2\"\u05DE:" + ItemA.getPriseWithoutVat(this.price) + " \u05E9\u05E7\u05DC\u05D9\u05DD");
        return div;
    };
    Skirt.prototype.displayImage = function () {
        var img = new Image();
        img.src = "Images/חצאית.jpg";
        img.id = "SkirtImg" + Skirt.counter;
        img.className = "imgInDiv";
        document.body.appendChild(img);
        return img;
    };
    Object.defineProperty(Skirt.prototype, "brand", {
        get: function () {
            return "\u05D9\u05E6\u05E8\u05DF:" + this.maker + ", \u05D3\u05D2\u05DD:" + this.model;
        },
        enumerable: true,
        configurable: true
    });
    return Skirt;
}(SkirtDressA));
//# sourceMappingURL=Skirt.js.map