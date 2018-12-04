class AlegantShoes extends ShoesA {
    private material: string;

    displayDetials(): HTMLElement {
        let div: HTMLElement = document.createElement("DIV");
        document.body.appendChild(div);
        div.id = `AlegantShoes${AlegantShoes.counter}`;
        div.className = `inDiv`;
        Printer.divQueryId = div.id;
        Printer.printDetailsAndBR(`נעלי אלגנט`);
        Printer.printDetailsAndBR(`יצרן:${this.maker}`);
        Printer.printDetailsAndBR(`דגם:${this.model}`);
        Printer.printDetailsAndBR(`מידה:${this.size}`);
        Printer.printDetailsAndBR(`מחיר:${this.price} שקלים`);
        Printer.printDetailsAndBR(`צבע:${this.color}`);
        Printer.printDetailsAndBR(`ארץ ייצור:${this.country}`);
        Printer.printDetailsAndBR(`שרוכים:${this.laces?"יש שרוכים":"אין שרוכים"}`);
        Printer.printDetailsAndBR(`סוג החומר:${this.material}`);
        Printer.printDetailsAndBR(`מחיר ללא מע"מ:${ItemA.getPriseWithoutVat(this.price)} שקלים`);
        return div;
    }
    displayImage():HTMLElement {
        var img = new Image();
        img.src = "Images/נעלי אלגנט.jpg";
        img.id = `AlegantShoesImg${AlegantShoes.counter}`;
        img.className = `imgInDiv`
        document.body.appendChild(img);
        return img
    }
    get brand(): string {
        return `יצרן:${this.maker}, דגם:${this.model}`
    }

    constructor(material: string, country: string, laces: boolean, maker: string, model: string, size: number, price: number, color: string) {
        super(country, maker, model, size, price, color);
        this.material = material;
        this.laces = laces;
        AlegantShoes.counter++

    }

}