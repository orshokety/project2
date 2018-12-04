var Generator = /** @class */ (function () {
    function Generator() {
    }
    Generator.getRandomItem = function () {
        switch (Random.numberZeroToMax(6)) {
            case 0:
                {
                    var belt = Generator.newBelt();
                    return belt;
                }
                ;
            case 1:
                {
                    var hat = Generator.newHat();
                    return hat;
                }
                ;
            case 2:
                {
                    var jacket = Generator.newJacket();
                    return jacket;
                }
                ;
            case 3:
                {
                    var pants = Generator.newPants();
                    return pants;
                }
                ;
            case 4:
                {
                    var shirt = Generator.newShirt();
                    return shirt;
                }
                ;
            case 5:
                {
                    var shoes = Generator.newShoes();
                    return shoes;
                }
                ;
            case 6:
                {
                    var dressOrSkirt = Generator.newDressOrSkirt();
                    return dressOrSkirt;
                }
                ;
            default:
        }
        return;
    };
    Generator.newBelt = function () {
        return new Belt(Random.arrayStr(Generator.alegentColors, Generator.alegentColors.length), Random.arrayStr(Generator.buckleMaterials, Generator.buckleMaterials.length), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.alegentColors, Generator.alegentColors.length));
    };
    Generator.newHat = function () {
        switch (Math.round(Math.random())) {
            case 0: {
                return new Cap(Random.boolean(), Random.numberMaxMin(30, 15), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length));
            }
            case 1: {
                return new Hat(Random.numberMaxMin(8, 1), Random.numberMaxMin(30, 15), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.alegentColors, Generator.alegentColors.length));
            }
        }
    };
    Generator.newJacket = function () {
        switch (Math.round(Math.random())) {
            case 0: {
                return new Coat(Random.boolean(), Random.numberMaxMin(10, 2), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length));
            }
            case 1: {
                return new Jacket(Random.numberZeroToMax(6), Random.numberMaxMin(10, 2), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.alegentColors, Generator.alegentColors.length));
            }
            default:
        }
    };
    Generator.newPants = function () {
        switch (Random.numberZeroToMax(2)) {
            case 0: {
                return new Jeans(Random.boolean(), Random.numberMaxMin(80, 20), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length));
            }
            case 1: {
                return new Pants(Random.numberMaxMin(6, 2), Random.numberMaxMin(80, 20), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length));
            }
            case 2: {
                return new Shorts(Random.arrayStr(Generator.fabics, Generator.fabics.length), Random.numberMaxMin(80, 20), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length));
            }
            default:
        }
    };
    Generator.newShirt = function () {
        switch (Random.numberZeroToMax(2)) {
            case 0: {
                return new ButtonedShirt(Random.numberMaxMin(8, 4), Random.numberMaxMin(80, 20), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length));
            }
            case 1: {
                return new TShirt(Random.arrayStr(Generator.makers, Generator.makers.length), Random.numberMaxMin(80, 20), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length));
            }
            case 2: {
                return new WomenShirt(Random.arrayStr(Generator.fabics, Generator.fabics.length), Random.numberMaxMin(80, 20), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length));
            }
            default:
        }
    };
    Generator.newShoes = function () {
        switch (Random.numberZeroToMax(3)) {
            case 0: {
                return new AlegantShoes(Random.arrayStr(Generator.shoesMaterials, Generator.shoesMaterials.length), Random.arrayStr(Generator.countries, Generator.countries.length), Random.boolean(), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberMaxMin(46, 20), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length));
            }
            case 1: {
                return new ComfortShoes(Random.boolean(), Random.arrayStr(Generator.countries, Generator.countries.length), Random.boolean(), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberMaxMin(46, 20), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length));
            }
            case 2: {
                return new HirShoes(Random.arrayStr(Generator.hirHighs, Generator.hirHighs.length), Random.arrayStr(Generator.countries, Generator.countries.length), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberMaxMin(46, 20), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length));
            }
            case 3: {
                return new SportShoes(Random.Date(new Date(2017, 11, 27), new Date()), Random.arrayStr(Generator.countries, Generator.countries.length), Random.boolean(), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberMaxMin(46, 20), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length));
            }
            default:
        }
    };
    Generator.newDressOrSkirt = function () {
        switch (Random.numberZeroToMax(2)) {
            case 0: {
                return new Dress(Random.numberMaxMin(180, 100), Random.boolean(), Random.numberMaxMin(100, 60), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length));
            }
            case 1: {
                return new FancyDress(Random.arrayStr(Generator.fabics, Generator.fabics.length), Random.numberMaxMin(180, 100), Random.boolean(), Random.numberMaxMin(100, 60), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length));
            }
            case 2: {
                return new Skirt(Random.boolean(), Random.numberMaxMin(100, 60), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length));
            }
            default:
        }
    };
    Generator.itemColors = ["\u05E9\u05D7\u05D5\u05E8", "\u05D0\u05D3\u05D5\u05DD", "\u05E6\u05D4\u05D5\u05D1", "\u05DB\u05D7\u05D5\u05DC", "\u05D0\u05E4\u05D5\u05E8"];
    Generator.alegentColors = ["\u05D7\u05D5\u05DD", "\u05E9\u05D7\u05D5\u05E8", "\u05D0\u05E4\u05D5\u05E8"];
    Generator.buckleMaterials = ["\u05DE\u05EA\u05DB\u05EA", "\u05D0\u05DC\u05D5\u05DE\u05D9\u05E0\u05D9\u05D5\u05DD", "\u05E4\u05DC\u05E1\u05D8\u05D9\u05E7"];
    Generator.shoesMaterials = ["\u05E2\u05D5\u05E8", "\u05E2\u05D5\u05E8 \u05E1\u05D9\u05E0\u05D8\u05D8\u05D9", "\u05D1\u05D3", "\u05D2\u05D5\u05DE\u05D9", "\u05D6\u05DE\u05E9"];
    Generator.hirHighs = ["\u05E2\u05E7\u05D1 \u05D2\u05D1\u05D5\u05D4\u05D4", "\u05E2\u05E7\u05D1 \u05D1\u05D9\u05E0\u05D5\u05E0\u05D9", "\u05E2\u05E7\u05D1 \u05E0\u05DE\u05D5\u05DA"];
    Generator.fabics = ["\u05DB\u05D5\u05EA\u05E0\u05D4", "\u05E4\u05D5\u05DC\u05D9\u05D0\u05E1\u05D8\u05E8", "\u05E7\u05E9\u05DE\u05D9\u05E8"];
    Generator.makers = ["\u05E7\u05E1\u05D8\u05E8\u05D5", "\u05E9\u05D5\u05E7\u05D9\u05E9\u05D5\u05E7", "\u05D8\u05D9\u05DE\u05D1\u05E8\u05DC\u05E0\u05D3", "\u05D6\u05D0\u05E8\u05D4", "\u05E8\u05E0\u05D5\u05D0\u05E8"];
    Generator.countries = ["\u05D9\u05E9\u05E8\u05D0\u05DC", "\u05E6\u05E8\u05E4\u05EA", "\u05D4\u05D5\u05DC\u05E0\u05D3", "\u05E1\u05D9\u05DF", "\u05D9\u05E4\u05DF"];
    return Generator;
}());
//# sourceMappingURL=Generator.js.map