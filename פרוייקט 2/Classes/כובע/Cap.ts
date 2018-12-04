class Cap extends HatA {
    private logo: boolean;
    displayDetials():HTMLElement {
        let div: HTMLElement = document.createElement("DIV")
        document.body.appendChild(div);
        div.id = `Cap${Cap.counter}`;
        div.className = `inDiv`;
        Printer.divQueryId = div.id;
        Printer.printDetailsAndBR(`כובע קסקט`);
        Printer.printDetailsAndBR(`יצרן:${this.maker}`);
        Printer.printDetailsAndBR(`דגם:${this.model}`);
        Printer.printDetailsAndBR(`מידה:${this.size}`);
        Printer.printDetailsAndBR(`מחיר:${this.price} שקלים`);
        Printer.printDetailsAndBR(`צבע:${this.color}`);
        Printer.printDetailsAndBR(`קוטר:${this.diameter} ס"מ`);
        Printer.printDetailsAndBR(`הדפס:${this.logo ? "יש הדפס" :"אין הדפס"}`);
        Printer.printDetailsAndBR(`מחיר ללא מע"מ:${ItemA.getPriseWithoutVat(this.price)} שקלים`);
        return div;
    }
    displayImage():HTMLElement {
        var img = new Image();
        img.src = "Images/כובע קסקט.jpg";
        img.id = `CapImg${Cap.counter}`;
        img.className = `imgInDiv`
        document.body.appendChild(img);
        return img
    }
    get brand(): string {
        return `יצרן:${this.maker}, דגם:${this.model}`
    }

    constructor(logo: boolean, diameter: number, maker: string, model: string, size: number, price: number, color: string) {
        super(diameter, maker, model, size, price, color);
        this.logo = logo;
        Cap.counter++
    }

}