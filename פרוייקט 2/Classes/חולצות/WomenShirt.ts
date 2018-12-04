class WomenShirt extends ShirtA {
    private fabric: string;
    //private fabics: Array<string> = [`כותנה`, `פוליאסטר`, `קשמיר`]
    displayDetials():HTMLElement {
        let div: HTMLElement = document.createElement("DIV")
        document.body.appendChild(div);
        div.id = `WomenShirt${WomenShirt.counter}`;
        div.className = `inDiv`;
        Printer.divQueryId = div.id;
        Printer.printDetailsAndBR(`חולצת נשים`);
        Printer.printDetailsAndBR(`יצרן:${this.maker}`);
        Printer.printDetailsAndBR(`דגם:${this.model}`);
        Printer.printDetailsAndBR(`מידה:${this.size}`);
        Printer.printDetailsAndBR(`מחיר:${this.price} שקלים`);
        Printer.printDetailsAndBR(`צבע:${this.color}`);
        Printer.printDetailsAndBR(`אורך שרוולים:${this.sleeves} ס"מ`);
        Printer.printDetailsAndBR(`סוג בד:${this.fabric}`);
        Printer.printDetailsAndBR(`מחיר ללא מע"מ:${ItemA.getPriseWithoutVat(this.price)} שקלים`);
        return div;
    }
    displayImage():HTMLElement{
        var img = new Image();
        img.src = "Images/חולצת נשים.jpg";
        img.id = `WomenShirtImg${WomenShirt.counter}`;
        img.className = `imgInDiv`
        document.body.appendChild(img);
        return img;
    }
    get brand(): string {
        return `יצרן:${this.maker}, דגם:${this.model}`
    }

    constructor(fabric: string, sleeves: number, maker: string, model: string, size: number, price: number, color: string) {
        super(sleeves, maker, model, size, price, color);
        this.fabric = fabric;
        WomenShirt.counter++
    }

}