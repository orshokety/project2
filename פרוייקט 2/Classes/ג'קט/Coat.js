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
var Coat = /** @class */ (function (_super) {
    __extends(Coat, _super);
    function Coat(rainCoat, thickness, maker, model, size, price, color) {
        var _this = _super.call(this, thickness, maker, model, size, price, color) || this;
        _this.rainCoat = rainCoat;
        Coat.counter++;
        return _this;
    }
    Coat.prototype.displayDetials = function () {
        var div = document.createElement("DIV");
        document.body.appendChild(div);
        div.id = "Coat" + Coat.counter;
        div.className = "inDiv";
        Printer.divQueryId = div.id;
        Printer.printDetailsAndBR("\u05DE\u05E2\u05D9\u05DC");
        Printer.printDetailsAndBR("\u05D9\u05E6\u05E8\u05DF: " + this.maker);
        Printer.printDetailsAndBR("\u05D3\u05D2\u05DD: " + this.model);
        Printer.printDetailsAndBR("\u05DE\u05D9\u05D3\u05D4: " + this.size);
        Printer.printDetailsAndBR("\u05DE\u05D7\u05D9\u05E8: " + this.price + " \u05E9\u05E7\u05DC\u05D9\u05DD");
        Printer.printDetailsAndBR("\u05E6\u05D1\u05E2: " + this.color);
        Printer.printDetailsAndBR("\u05E2\u05D5\u05D1\u05D9 \u05D1\u05D3: " + this.thickness + " \u05DE\"\u05DE");
        Printer.printDetailsAndBR("\u05DE\u05E2\u05D9\u05DC \u05D2\u05E9\u05DD: " + (this.rainCoat ? "כן" : "לא"));
        Printer.printDetailsAndBR("\u05DE\u05D7\u05D9\u05E8 \u05DC\u05DC\u05D0 \u05DE\u05E2\"\u05DE: " + ItemA.getPriseWithoutVat(this.price) + "\u05E9\u05E7\u05DC\u05D9\u05E4");
        return div;
    };
    Coat.prototype.displayImage = function () {
        var img = new Image();
        img.src = "Images/מעיל.jpg";
        img.id = "CoatImg" + Coat.counter;
        img.className = "imgInDiv";
        document.body.appendChild(img);
        return img;
    };
    Object.defineProperty(Coat.prototype, "brand", {
        get: function () {
            return "\u05D9\u05E6\u05E8\u05DF:" + this.maker + ", \u05D3\u05D2\u05DD:" + this.model;
        },
        enumerable: true,
        configurable: true
    });
    return Coat;
}(JucketA));
//# sourceMappingURL=Coat.js.map