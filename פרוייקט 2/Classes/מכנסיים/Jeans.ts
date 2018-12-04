class Jeans extends PantsA {
    private tears: boolean;
    displayDetials():HTMLElement {
        let div: HTMLElement = document.createElement("DIV")
        document.body.appendChild(div);
        div.id = `Jeans${Jeans.counter}`;
        div.className = `inDiv`;
        Printer.divQueryId = div.id;
        Printer.printDetailsAndBR(`ג'ינס`);
        Printer.printDetailsAndBR(`יצרן:${this.maker}`);
        Printer.printDetailsAndBR(`דגם:${this.model}`);
        Printer.printDetailsAndBR(`מידה:${this.size}`);
        Printer.printDetailsAndBR(`מחיר:${this.price} שקלים`);
        Printer.printDetailsAndBR(`צבע:${this.color}`);
        Printer.printDetailsAndBR(`אורך המכנס:${this.pantsLength} ס"מ`);
        Printer.printDetailsAndBR(`האם יש קרעים:${this.tears ?"כן":"לא"}`);
        Printer.printDetailsAndBR(`מחיר ללא מע"מ:${ItemA.getPriseWithoutVat(this.price)} שקלים`);
        return div;
    }
    displayImage():HTMLElement {
        var img = new Image();
        img.src = "Images/ג'ינס.jpg";
        img.id = `JeansImg${Jeans.counter}`;
        img.className = `imgInDiv`
        document.body.appendChild(img);
        return img;
    }
    get brand(): string {
        return `יצרן:${this.maker}, דגם:${this.model}`
    }

    constructor(tears: boolean, pantsLength: number, maker: string, model: string, size: number, price: number, color: string) {
        super(pantsLength,maker, model, size, price, color);
        this.tears = tears;
        Jeans.counter++
    }

}