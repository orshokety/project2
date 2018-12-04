var Printer = /** @class */ (function () {
    function Printer() {
    }
    Printer.printDetailsAndBR = function (tmp) {
        document.querySelector("#" + Printer.divQueryId).innerHTML += tmp + "<br>";
    };
    Printer.printDetails = function (tmp) {
        document.querySelector("#" + Printer.divQueryId).innerHTML += "" + tmp;
    };
    Printer.printHR = function () {
        var hr = document.createElement("HR");
        document.body.appendChild(hr);
    };
    return Printer;
}());
//# sourceMappingURL=Printer.js.map