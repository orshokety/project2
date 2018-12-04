class Dress extends SkirtDressA {
    protected length: number;
    protected openBack: boolean;
    private errSTRa: string = `הוזן ערך שגוי באורך השמלה`;

    displayDetials():HTMLElement {
        let div: HTMLElement = document.createElement("DIV")
        document.body.appendChild(div);
        div.id = `Dress${Dress.counter}`;
        div.className = `inDiv`;
        Printer.divQueryId = div.id;
        Printer.printDetailsAndBR(`שמלה`);
        Printer.printDetailsAndBR(`יצרן:${this.maker}`);
        Printer.printDetailsAndBR(`דגם:${this.model}`);
        Printer.printDetailsAndBR(`מידה:${this.size}`);
        Printer.printDetailsAndBR(`מחיר:${this.price} שקלים`);
        Printer.printDetailsAndBR(`צבע:${this.color}`);
        Printer.printDetailsAndBR(`היקף:${this.scope} ס"מ`);
        Printer.printDetailsAndBR(`אורך שמלה:${this.length}`);
        Printer.printDetailsAndBR(`גב פתוח:${this.openBack ? `כן` : `לא`}`);
        Printer.printDetailsAndBR(`מחיר ללא מע"מ:${ItemA.getPriseWithoutVat(this.price)} שקלים`);
        return div;
    }
    displayImage():HTMLElement {
        var img = new Image();
        img.src = "Images/שמלה.jpg";
        img.id = `DressImg${Dress.counter}`;
        img.className = `imgInDiv`
        document.body.appendChild(img);
        return img;
    }
    get brand(): string {
        return `יצרן:${this.maker}, דגם:${this.model}`
    }

    set Length(long:number) {
        try {
            if (long >= 100 || long <= 180) {
                this.length = length;
            }
            else {
                throw this.errSTRa;
            }
        }
        catch (e) {
            console.log(e);
            }
    }
    constructor(length: number, openBack: boolean, scope:number, maker: string, model: string, size: number, prise: number, color: string) {
        super(scope, maker, model, size, prise, color);
        this.Length = length
        this.openBack = openBack;
        Dress.counter++
    }

}