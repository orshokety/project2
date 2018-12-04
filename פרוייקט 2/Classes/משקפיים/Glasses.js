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
var Glasses = /** @class */ (function (_super) {
    __extends(Glasses, _super);
    function Glasses(distance, maker, model, price, color) {
        var _this = _super.call(this, maker, model, price, color) || this;
        _this.erorSTR = "\u05D4\u05D5\u05D6\u05DF \u05E2\u05E8\u05DA \u05E9\u05D2\u05D5\u05D9 \u05D1\u05D2\u05D5\u05D1\u05D4 \u05D4\u05DE\u05E7\u05D1\u05E2\u05EA";
        _this.Distance = distance;
        Glasses.counter++;
        return _this;
    }
    Glasses.prototype.displayDetials = function () {
        var div = document.createElement("DIV");
        document.body.appendChild(div);
        div.id = "Glasses" + Glasses.counter;
        div.className = "inDiv";
        Printer.divQueryId = div.id;
        Printer.printDetailsAndBR("\u05DE\u05E9\u05E7\u05E4\u05D9 \u05E8\u05D0\u05D9\u05D9\u05D4");
        Printer.printDetailsAndBR("\u05D9\u05E6\u05E8\u05DF:" + this.maker);
        Printer.printDetailsAndBR("\u05D3\u05D2\u05DD:" + this.model);
        Printer.printDetailsAndBR("\u05DE\u05D7\u05D9\u05E8:" + this.price + " \u05E9\u05E7\u05DC\u05D9\u05DD");
        Printer.printDetailsAndBR("\u05E6\u05D1\u05E2 \u05D4\u05DE\u05E1\u05D2\u05E8\u05EA:" + this.color);
        Printer.printDetailsAndBR("\u05DE\u05E8\u05D7\u05E7 \u05DE\u05D5\u05DE\u05DC\u05E5 \u05DC\u05E7\u05E8\u05D9\u05D0\u05D4:" + this.distance);
        Printer.printDetailsAndBR("\u05DE\u05D7\u05D9\u05E8 \u05DC\u05DC\u05D0 \u05DE\u05E2\"\u05DE:" + ItemA.getPriseWithoutVat(this.price) + " \u05E9\u05E7\u05DC\u05D9\u05DD");
        return div;
    };
    Glasses.prototype.displayImage = function () {
        var img = new Image();
        img.src = "Images/משקפי ראייה.jpg";
        img.id = "GlassesImg" + Glasses.counter;
        img.className = "imgInDiv";
        document.body.appendChild(img);
        return img;
    };
    Object.defineProperty(Glasses.prototype, "brand", {
        get: function () {
            return "\u05D9\u05E6\u05E8\u05DF:" + this.maker + ", \u05D3\u05D2\u05DD:" + this.model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Glasses.prototype, "Distance", {
        set: function (distance) {
            try {
                if (distance > 0 && distance <= 8) {
                    this.distance = distance;
                }
                else {
                    throw this.erorSTR;
                }
            }
            catch (e) {
                console.log(e);
            }
        },
        enumerable: true,
        configurable: true
    });
    return Glasses;
}(ItemA));
//# sourceMappingURL=Glasses.js.map