class Shorts extends PantsA {
    private fabric: string;
    displayDetials():HTMLElement {
        let div: HTMLElement = document.createElement("DIV")
        document.body.appendChild(div);
        div.id = `Shorts${Shorts.counter}`;
        div.className = `inDiv`;
        Printer.divQueryId = div.id;
        Printer.printDetailsAndBR(`מכנסיים קצרים`);
        Printer.printDetailsAndBR(`יצרן:${this.maker}`);
        Printer.printDetailsAndBR(`דגם:${this.model}`);
        Printer.printDetailsAndBR(`מידה:${this.size}`);
        Printer.printDetailsAndBR(`מחיר:${this.price} שקלים`);
        Printer.printDetailsAndBR(`צבע:${this.color}`);
        Printer.printDetailsAndBR(`אורך המכנס:${this.pantsLength} ס"מ`);
        Printer.printDetailsAndBR(`סוג הבד:${this.fabric}`);
        Printer.printDetailsAndBR(`מחיר ללא מע"מ:${ItemA.getPriseWithoutVat(this.price)} שקלים`);
        return div;
    }
    displayImage():HTMLElement {
        var img = new Image();
        img.src = "Images/מכנסיים קצרים.jpg";
        img.id = `ShortsImg${Shorts.counter}`;
        img.className = `imgInDiv`
        document.body.appendChild(img);
        return img;
    }
    get brand(): string {
        return `יצרן:${this.maker}, דגם:${this.model}`
    }

    constructor(fabric: string, pantsLength: number, maker: string, model: string, size: number, price: number, color: string) {
        super(pantsLength, maker, model, size, price, color);
        this.fabric = fabric;
        Shorts.counter++
    }

}