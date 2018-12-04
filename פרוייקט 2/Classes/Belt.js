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
var Belt = /** @class */ (function (_super) {
    __extends(Belt, _super);
    function Belt(buckleColor, buckleMaterial, maker, model, price, color) {
        var _this = _super.call(this, maker, model, price, color) || this;
        _this.beltSize = new Diemensions(Random.numberMaxMin(150, 300), Random.numberMaxMin(25, 50), Random.numberMaxMin(150, 300));
        _this.buckleColor = buckleColor;
        _this.buckleMaterial = buckleMaterial;
        Belt.counter++;
        return _this;
    }
    Belt.prototype.displayDetials = function () {
        var div = document.createElement("DIV");
        document.body.appendChild(div);
        div.id = "Belt" + Belt.counter;
        div.className = "inDiv";
        Printer.divQueryId = div.id;
        Printer.printDetailsAndBR("\u05D9\u05E6\u05E8\u05DF:" + this.maker);
        Printer.printDetailsAndBR("\u05D3\u05D2\u05DD:" + this.model);
        Printer.printDetailsAndBR("\u05DE\u05D7\u05D9\u05E8:" + this.price);
        Printer.printDetailsAndBR("\u05E6\u05D1\u05E2 \u05D4\u05D7\u05D2\u05D5\u05E8\u05D4:" + this.color);
        Printer.printDetailsAndBR("\u05E6\u05D1\u05E2 \u05D4\u05D0\u05D1\u05D6\u05DD:" + this.buckleColor);
        Printer.printDetailsAndBR("\u05E1\u05D5\u05D2 \u05D7\u05D5\u05DE\u05E8 \u05D4\u05D0\u05D1\u05D6\u05DD: " + this.buckleMaterial);
        Printer.printDetailsAndBR("\u05DE\u05D9\u05D3\u05D5\u05EA :\u05D2\u05D5\u05D1\u05D4:" + this.beltSize.height + ", \u05D0\u05D5\u05E8\u05DA:" + this.beltSize.length + ", \u05E8\u05D5\u05D7\u05D1:" + this.beltSize.width);
        Printer.printDetailsAndBR("\u05DE\u05D7\u05D9\u05E8 \u05DC\u05DC\u05D0 \u05DE\u05E2\"\u05DE:" + ItemA.getPriseWithoutVat(this.price));
        return div;
    };
    Belt.prototype.displayImage = function () {
        var img = new Image();
        img.src = "Images/חגורה.jpg";
        img.id = "BeltImg" + Belt.counter;
        img.className = "imgInDiv";
        document.body.appendChild(img);
        return img;
    };
    Object.defineProperty(Belt.prototype, "brand", {
        get: function () {
            return "\u05D9\u05E6\u05E8\u05DF:" + this.maker + ", \u05D3\u05D2\u05DD:" + this.model;
        },
        enumerable: true,
        configurable: true
    });
    return Belt;
}(ItemA));
var Diemensions = /** @class */ (function () {
    function Diemensions(height, width, length) {
        this.Height = height;
        this.Width = width;
        this.Length = length;
    }
    Object.defineProperty(Diemensions.prototype, "Height", {
        set: function (height) {
            if (height > 0) {
                this.height = height;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Diemensions.prototype, "Width", {
        set: function (width) {
            if (width > 0) {
                this.width = width;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Diemensions.prototype, "Length", {
        set: function (length) {
            if (length > 0) {
                this.length = length;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Diemensions;
}());
//# sourceMappingURL=Belt.js.map