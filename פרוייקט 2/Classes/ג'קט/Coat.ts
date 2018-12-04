class Coat extends JucketA {
    private rainCoat: boolean;
    displayDetials():HTMLElement {
        let div: HTMLElement = document.createElement("DIV");
        document.body.appendChild(div);
        div.id = `Coat${Coat.counter}`;
        div.className = `inDiv`;
        Printer.divQueryId = div.id;
        Printer.printDetailsAndBR(`מעיל`);
        Printer.printDetailsAndBR(`יצרן: ${this.maker}`);
        Printer.printDetailsAndBR(`דגם: ${this.model}`);
        Printer.printDetailsAndBR(`מידה: ${this.size}`);
        Printer.printDetailsAndBR(`מחיר: ${this.price} שקלים`);
        Printer.printDetailsAndBR(`צבע: ${this.color}`);
        Printer.printDetailsAndBR(`עובי בד: ${this.thickness} מ"מ`); 
        Printer.printDetailsAndBR(`מעיל גשם: ${this.rainCoat ? "כן" : "לא"}`);
        Printer.printDetailsAndBR(`מחיר ללא מע"מ: ${ItemA.getPriseWithoutVat(this.price)}שקליפ`);
        return div;
    }
    displayImage():HTMLElement {
        var img = new Image();
        img.src = "Images/מעיל.jpg";
        img.id = `CoatImg${Coat.counter}`;
        img.className = `imgInDiv`
        document.body.appendChild(img);
        return img;
    }
    get brand(): string {
        return `יצרן:${this.maker}, דגם:${this.model}`
    }

    constructor(rainCoat: boolean, thickness: number, maker: string, model: string, size: number, price: number, color: string) {
        super(thickness,maker, model, size, price, color);
        this.rainCoat = rainCoat;
        Coat.counter++
    }

}