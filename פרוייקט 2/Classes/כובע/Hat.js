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
var Hat = /** @class */ (function (_super) {
    __extends(Hat, _super);
    function Hat(height, diameter, maker, model, size, price, color) {
        var _this = _super.call(this, diameter, maker, model, size, price, color) || this;
        _this.erorSTR = "\u05D4\u05D5\u05D6\u05DF \u05E2\u05E8\u05DA \u05E9\u05D2\u05D5\u05D9 \u05D1\u05D2\u05D5\u05D1\u05D4 \u05D4\u05DE\u05D2\u05D1\u05E2\u05EA";
        _this.Height = height;
        Hat.counter++;
        return _this;
    }
    //colors = [`חום`, `שחור`, `אפור`]
    Hat.prototype.displayDetials = function () {
        var div = document.createElement("DIV");
        document.body.appendChild(div);
        div.id = "Hat" + Hat.counter;
        div.className = "inDiv";
        Printer.divQueryId = div.id;
        Printer.printDetailsAndBR("\u05DE\u05D2\u05D1\u05E2\u05EA");
        Printer.printDetailsAndBR("\u05D9\u05E6\u05E8\u05DF:" + this.maker);
        Printer.printDetailsAndBR("\u05D3\u05D2\u05DD:" + this.model);
        Printer.printDetailsAndBR("\u05DE\u05D9\u05D3\u05D4:" + this.size);
        Printer.printDetailsAndBR("\u05DE\u05D7\u05D9\u05E8:" + this.price + " \u05E9\u05E7\u05DC\u05D9\u05DD");
        Printer.printDetailsAndBR("\u05E6\u05D1\u05E2:" + this.color);
        Printer.printDetailsAndBR("\u05E7\u05D5\u05D8\u05E8:" + this.diameter + " \u05E1\"\u05DE");
        Printer.printDetailsAndBR("\u05D2\u05D5\u05D1\u05D4 \u05D4\u05DE\u05D2\u05D1\u05E2\u05EA:" + this.height + " \u05E1\"\u05DE");
        Printer.printDetailsAndBR("\u05DE\u05D7\u05D9\u05E8 \u05DC\u05DC\u05D0 \u05DE\u05E2\"\u05DE:" + ItemA.getPriseWithoutVat(this.price) + " \u05E9\u05E7\u05DC\u05D9\u05DD");
        return div;
    };
    Hat.prototype.displayImage = function () {
        var img = new Image();
        img.src = "Images/מגבעת.jpg";
        img.id = "HatImg" + Hat.counter;
        img.className = "imgInDiv";
        document.body.appendChild(img);
        return img;
    };
    Object.defineProperty(Hat.prototype, "brand", {
        get: function () {
            return "\u05D9\u05E6\u05E8\u05DF:" + this.maker + ", \u05D3\u05D2\u05DD:" + this.model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hat.prototype, "Height", {
        set: function (height) {
            try {
                if (height > 0 && height <= 8) {
                    this.height = height;
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
    return Hat;
}(HatA));
//# sourceMappingURL=Hat.js.map