class HirShoes extends ShoesA {
    private hirHigh: string;
    displayDetials():HTMLElement {
        let div: HTMLElement = document.createElement("DIV")
        document.body.appendChild(div);
        div.id = `HirShoes${HirShoes.counter}`;
        div.className = `inDiv`;
        Printer.divQueryId = div.id;
        Printer.printDetailsAndBR(`נעלי עקב`);
        Printer.printDetailsAndBR(`יצרן:${this.maker}`);
        Printer.printDetailsAndBR(`דגם:${this.model}`);
        Printer.printDetailsAndBR(`מידה:${this.size}`);
        Printer.printDetailsAndBR(`מחיר:${this.price} שקלים`);
        Printer.printDetailsAndBR(`צבע:${this.color}`);
        Printer.printDetailsAndBR(`ארץ ייצור:${this.country}`);
        Printer.printDetailsAndBR(`שרוכים:${this.hirHigh ? "יש שרוכים" : "אין שרוכים"}`);
        Printer.printDetailsAndBR(`סוג העקב:${this.hirHigh}`);
        Printer.printDetailsAndBR(`מחיר ללא מע"מ:${ItemA.getPriseWithoutVat(this.price)} שקלים`);
        return div;
    }
    displayImage():HTMLElement {
        var img = new Image();
        img.src = "Images/נעלי עקב.jpg";
        img.id = `HirShoesImg${HirShoes.counter}`;
        img.className = `imgInDiv`
        document.body.appendChild(img);
        return img;
    }
    get brand(): string {
        return `יצרן:${this.maker}, דגם:${this.model}`
    }

    constructor(hirHigh: string,country: string, maker: string, model: string, size: number, price: number, color: string) {
        super(country, maker, model, size, price, color);
        this.hirHigh = hirHigh;
        HirShoes.counter++
    }

}