class Skirt extends SkirtDressA {
    protected errSTRa: string = `הוזן ערך שגוי בסוג החצאית`;
    protected errSTR: string = `הוזן ערך שגוי בהיקף החצאית`;
    private kindOfSkirt: boolean;
    
    displayDetials():HTMLElement {
        let div: HTMLElement = document.createElement("DIV")
        document.body.appendChild(div);
        div.id = `Skirt${Skirt.counter}`;
        div.className = `inDiv`;
        Printer.divQueryId = div.id;
        Printer.printDetailsAndBR(`חצאית`);
        Printer.printDetailsAndBR(`יצרן:${this.maker}`);
        Printer.printDetailsAndBR(`דגם:${this.model}`);
        Printer.printDetailsAndBR(`מידה:${this.size} שקלים`);
        Printer.printDetailsAndBR(`מחיר:${this.price}`);
        Printer.printDetailsAndBR(`צבע:${this.color}`);
        Printer.printDetailsAndBR(`היקף:${this.scope} ס"מ`);
        Printer.printDetailsAndBR(`סוג החצאית:${this.kindOfSkirt ? `ארוכה` : `קצרה`}`);
        Printer.printDetailsAndBR(`מחיר ללא מע"מ:${ItemA.getPriseWithoutVat(this.price)} שקלים`);
        return div;
    }
    displayImage():HTMLElement {
        var img = new Image();
        img.src = "Images/חצאית.jpg";
        img.id = `SkirtImg${Skirt.counter}`;
        img.className = `imgInDiv`
        document.body.appendChild(img);
        return img
    }
    get brand(): string {
        return `יצרן:${this.maker}, דגם:${this.model}`
    }

    constructor(kindOfSkirt: boolean, scope:number, maker: string, model: string, size: number, prise: number, color: string) {
        super(scope, maker, model, size, prise, color);
        this.kindOfSkirt = kindOfSkirt;
        Skirt.counter++
    }

}