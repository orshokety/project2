class Generator {
    private static itemColors: Array<string> = [`שחור`, `אדום`, `צהוב`, `כחול`, `אפור`];
    private static alegentColors: Array<string>= [`חום`, `שחור`, `אפור`];
    private static buckleMaterials: Array<string> = [`מתכת`, `אלומיניום`,`פלסטיק`];
    private static shoesMaterials: Array<string> = [`עור`, `עור סינטטי`, `בד`, `גומי`, `זמש`];
    private static hirHighs: Array<string> = [`עקב גבוהה`, `עקב בינוני`, `עקב נמוך`];
    private static fabics: Array<string> = [`כותנה`, `פוליאסטר`, `קשמיר`];
    private static makers: Array<string> = [`קסטרו`, `שוקישוק`, `טימברלנד`, `זארה`, `רנואר`];
    private static countries: Array<string> = [`ישראל`, `צרפת`, `הולנד`, `סין`, `יפן`];
    static counter: number;
    items: Array<ItemA>
    static getRandomItem(): ItemA {

        switch (Random.numberZeroToMax(6)) {
            case 0: {
                let belt = Generator.newBelt()
                return belt
            }
            case 1: {
                let hat = Generator.newHat()
                return hat
            }
            case 2: {
                let jacket = Generator.newJacket()
                return jacket
            }
            case 3: {
                let pants = Generator.newPants()
                return pants
            }
            case 4: {
                let shirt = Generator.newShirt()
                return shirt
            }
            case 5: {
                let shoes = Generator.newShoes()
                return shoes
            }
            case 6: {
                let dressOrSkirt = Generator.newDressOrSkirt()
                return dressOrSkirt
            }
            default:
        }
        
    }
    private static newBelt(): Belt {
        return new Belt(Random.arrayStr(Generator.alegentColors, Generator.alegentColors.length), Random.arrayStr(Generator.buckleMaterials, Generator.buckleMaterials.length), Random.arrayStr(Generator.makers, Generator.makers.length),Random.model(),Random.numberMaxMin(300,100),Random.arrayStr(Generator.alegentColors, Generator.alegentColors.length)); 
    }
    private static newHat(): HatA {
        switch (Math.round(Math.random())) {
            case 0: { return new Cap(Random.boolean(), Random.numberMaxMin(30, 15), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length)) }
            case 1: { return new Hat(Random.numberMaxMin(8,1), Random.numberMaxMin(30, 15), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.alegentColors, Generator.alegentColors.length)) }
        }

    }
    private static newJacket(): JucketA {
        switch (Math.round(Math.random())) {
            case 0: { return new Coat(Random.boolean(), Random.numberMaxMin(10, 2), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length)) }
            case 1: { return new Jacket(Random.numberZeroToMax(6), Random.numberMaxMin(10, 2), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.alegentColors, Generator.alegentColors.length)) }
            default:
        }

    }
    private static newPants(): PantsA {
        switch (Random.numberZeroToMax(2)) {
            case 0: { return new Jeans(Random.boolean(), Random.numberMaxMin(80, 20), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length)) }
            case 1: { return new Pants(Random.numberMaxMin(6, 2), Random.numberMaxMin(80, 20), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5),Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length)) }
            case 2: { return new Shorts(Random.arrayStr(Generator.fabics, Generator.fabics.length), Random.numberMaxMin(80, 20), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length)) }
            default:
        }

    }
    private static newShirt(): ShirtA {
        switch (Random.numberZeroToMax(2)) {
            case 0: { return new ButtonedShirt(Random.numberMaxMin(8, 4), Random.numberMaxMin(80, 20), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length)) }
            case 1: { return new TShirt(Random.arrayStr(Generator.makers, Generator.makers.length), Random.numberMaxMin(80, 20), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length))}
            case 2: { return new WomenShirt(Random.arrayStr(Generator.fabics, Generator.fabics.length), Random.numberMaxMin(80, 20), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length)) }
            default:
        }

    }
    private static newShoes(): ShoesA {
        switch (Random.numberZeroToMax(3)) {
            case 0: { return new AlegantShoes(Random.arrayStr(Generator.shoesMaterials, Generator.shoesMaterials.length), Random.arrayStr(Generator.countries, Generator.countries.length), Random.boolean(), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberMaxMin(46,20), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length)) }
            case 1: { return new ComfortShoes(Random.boolean(), Random.arrayStr(Generator.countries, Generator.countries.length), Random.boolean(), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberMaxMin(46, 20), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length)) }
            case 2: { return new HirShoes(Random.arrayStr(Generator.hirHighs, Generator.hirHighs.length), Random.arrayStr(Generator.countries, Generator.countries.length), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberMaxMin(46, 20), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length)) }
            case 3: { return new SportShoes(Random.Date(new Date(2017, 11, 27), new Date()), Random.arrayStr(Generator.countries, Generator.countries.length), Random.boolean(), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberMaxMin(46, 20), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length)) }
            default:
        }

    }
    private static newDressOrSkirt(): SkirtDressA {
        switch (Random.numberZeroToMax(2)) {
            case 0: { return new Dress(Random.numberMaxMin(180, 100), Random.boolean(), Random.numberMaxMin(100, 60), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length))  }
            case 1: { return new FancyDress(Random.arrayStr(Generator.fabics, Generator.fabics.length), Random.numberMaxMin(180, 100), Random.boolean(), Random.numberMaxMin(100, 60), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length)) }
            case 2: { return new Skirt(Random.boolean(), Random.numberMaxMin(100, 60), Random.arrayStr(Generator.makers, Generator.makers.length), Random.model(), Random.numberZeroToMax(5), Random.numberMaxMin(300, 100), Random.arrayStr(Generator.itemColors, Generator.itemColors.length)) }
            default:
        }

    }

}
