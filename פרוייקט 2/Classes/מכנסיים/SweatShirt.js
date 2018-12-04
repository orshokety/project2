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
var SweatShirt = /** @class */ (function (_super) {
    __extends(SweatShirt, _super);
    function SweatShirt(distance, maker, model, size, prise, color) {
        var _this = _super.call(this, maker, model, size, prise, color) || this;
        _this.distance = distance;
        return _this;
    }
    return SweatShirt;
}(PantsA));
//# sourceMappingURL=SweatShirt.js.map