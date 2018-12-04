class SunGlasses extends ItemA {
    private glassColor: string;

    displayDetials():HTMLElement {
        let div: HTMLElement = document.createElement("DIV")
        document.body.appendChild(div);
        div.id = `SunGlasses${SunGlasses.counter}`;
        div.className = `inDiv`;
        Printer.divQueryId = div.id;
        Printer.printDetailsAndBR(`משקפי שמש`);
        Printer.printDetailsAndBR(`יצרן:${this.maker}`);
        Printer.printDetailsAndBR(`דגם:${this.model}`);
        Printer.printDetailsAndBR(`מחיר:${this.price} שקלים`);
        Printer.printDetailsAndBR(`צבע המסגרת:${this.color}`);
        Printer.printDetailsAndBR(`צבע הזכוכית:${this.glassColor}`);
        Printer.printDetailsAndBR(`מחיר ללא מע"מ:${ItemA.getPriseWithoutVat(this.price)} שקלים`);
        return div;
    }
    displayImage():HTMLElement {
        var img = new Image();
        img.src = "Images/משקפי שמש.gif";
        img.id = `SunGlassesImg${SunGlasses.counter}`;
        img.className = `imgInDiv`
        document.body.appendChild(img);
        return img;
    }
    get brand(): string {
        return `יצרן:${this.maker}, דגם:${this.model}`
    }

    constructor(glassColor: string, maker: string, model: string, price: number, color: string) {
        super(maker, model, price, color);
        this.glassColor = glassColor;
        SunGlasses.counter++
    }

}