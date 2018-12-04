class FancyDress extends Dress {
    private fabric: string;

    //private fabics: Array<string> = [`כותנה`, `פוליאסטר`, `קשמיר`];
    displayDetials():HTMLElement {
        let div: HTMLElement = document.createElement("DIV")
        document.body.appendChild(div);
        div.id = `FancyDress${FancyDress.counter}`;
        div.className = `inDiv`;
        Printer.divQueryId = div.id;
        Printer.printDetailsAndBR(`שמלת ערב`);
        Printer.printDetailsAndBR(`יצרן:${this.maker}`);
        Printer.printDetailsAndBR(`דגם:${this.model}`);
        Printer.printDetailsAndBR(`מידה:${this.size}`);
        Printer.printDetailsAndBR(`מחיר:${this.price} שקלים`);
        Printer.printDetailsAndBR(`צבע:${this.color}`);
        Printer.printDetailsAndBR(`היקף:${this.scope} ס"מ`);
        Printer.printDetailsAndBR(`סוג בד:${this.fabric}`);
        Printer.printDetailsAndBR(`אורך שמלה:${this.length}`);
        Printer.printDetailsAndBR(`גב פתוח:${this.openBack ? `כן` : `לא`}`);
        Printer.printDetailsAndBR(`מחיר ללא מע"מ:${ItemA.getPriseWithoutVat(this.price)} שקלים`);
        return div;
    }
    displayImage():HTMLElement {
        var img = new Image();
        img.src = "Images/שמלת ערב.jpg";
        img.id = `FancyDressImg${FancyDress.counter}`;
        img.className = `imgInDiv`
        document.body.appendChild(img);
        return img;
    }
    get brand(): string {
        return `יצרן:${this.maker}, דגם:${this.model}`
    }

    constructor(fabric: string, length: number, openBack: boolean, scope: number,  maker: string, model: string, size: number, prise: number, color: string) {
        super(length, openBack,scope,maker, model, size, prise, color);
        this.fabric = fabric;
        FancyDress.counter++
    }

}