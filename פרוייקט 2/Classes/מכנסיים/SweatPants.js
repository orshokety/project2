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
var SweatPants = /** @class */ (function (_super) {
    __extends(SweatPants, _super);
    function SweatPants(numberOfPockets, maker, model, size, prise, color) {
        var _this = _super.call(this, maker, model, size, prise, color) || this;
        _this.NumberOfPockets = numberOfPockets;
        return _this;
    }
    Object.defineProperty(SweatPants.prototype, "NumberOfPockets", {
        set: function (numberOfPockets) {
            if (numberOfPockets > 2 && numberOfPockets < 6) {
                this.numberOfPockets = numberOfPockets;
            }
        },
        enumerable: true,
        configurable: true
    });
    return SweatPants;
}(PantsA));
//# sourceMappingURL=SweatPants.js.map