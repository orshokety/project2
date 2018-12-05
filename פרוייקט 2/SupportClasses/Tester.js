var Tester = /** @class */ (function () {
    function Tester() {
        this.items = [];
    }
    Object.defineProperty(Tester.prototype, "Counter", {
        set: function (counter) {
            if (counter >= 1 && counter <= 5000) {
                this.counter = counter;
            }
        },
        enumerable: true,
        configurable: true
    });
    Tester.prototype.test = function () {
        while (!this.counter) {
            this.Counter = Number(prompt("\u05E8\u05E9\u05D5\u05DD \u05D0\u05EA \u05DE\u05E1\u05E4\u05E8 \u05D4\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD \u05D1\u05D7\u05E0\u05D5\u05EA(1-5000)"));
            if (!this.counter) {
                alert("\u05D8\u05E2\u05D5\u05EA \u05D1\u05D4\u05D6\u05E0\u05EA \u05DE\u05E1\u05E4\u05E8 \u05D0\u05E0\u05D0 \u05E8\u05E9\u05D5\u05DD \u05DE\u05E1\u05E4\u05E8 \u05D1\u05D9\u05DF(1-5000)");
            }
        }
        for (var i = 0; i < this.counter; i++) {
            this.items.push(Generator.getRandomItem());
            var div = document.createElement("DIV");
            document.body.appendChild(div);
            div.id = "" + Tester.containerSide[Tester.j] + Tester.containerLineNumber;
            div.className = "container";
            div.appendChild(this.items[i].displayDetials());
            div.appendChild(this.items[i].displayImage());
            Printer.printDetailsAndBR("" + this.items[i].brand);
            if (Tester.j == 2) {
                Tester.containerLineNumber++;
            }
            if (Tester.j == 0 || Tester.j == 1) {
                Tester.j++;
            }
            else {
                Tester.j = 0;
            }
        }
    };
    Tester.containerSide = ["right", "middle", "left"];
    Tester.containerLineNumber = 1;
    Tester.j = 0;
    return Tester;
}());
//# sourceMappingURL=Tester.js.map