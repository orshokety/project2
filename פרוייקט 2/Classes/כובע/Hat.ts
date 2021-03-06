﻿class Hat extends HatA {
    private height: number;
    private erorSTR: string = `הוזן ערך שגוי בגובה המגבעת`;
    //colors = [`חום`, `שחור`, `אפור`]
    displayDetials():HTMLElement {
        let div: HTMLElement = document.createElement("DIV")
        document.body.appendChild(div);
        div.id = `Hat${Hat.counter}`;
        div.className = `inDiv`;
        Printer.divQueryId = div.id;
        Printer.printDetailsAndBR(`מגבעת`);
        Printer.printDetailsAndBR(`יצרן:${this.maker}`);
        Printer.printDetailsAndBR(`דגם:${this.model}`);
        Printer.printDetailsAndBR(`מידה:${this.size}`);
        Printer.printDetailsAndBR(`מחיר:${this.price} שקלים`);
        Printer.printDetailsAndBR(`צבע:${this.color}`);
        Printer.printDetailsAndBR(`קוטר:${this.diameter } ס"מ`);
        Printer.printDetailsAndBR(`גובה המגבעת:${this.height} ס"מ`);
        Printer.printDetailsAndBR(`מחיר ללא מע"מ:${ItemA.getPriseWithoutVat(this.price)} שקלים`);
        return div
    }
    displayImage():HTMLElement {
        var img = new Image();
        img.src = "Images/מגבעת.jpg";
        img.id = `HatImg${Hat.counter}`;
        img.className = `imgInDiv`
        document.body.appendChild(img);
        return img;
    }
    get brand(): string {
        return `יצרן:${this.maker}, דגם:${this.model}`
    }

    private set Height(height: number) {
        try {
            if (height > 0 && height <= 8) {
            this.height = height;
            }
            else {
            throw this.erorSTR;
            }
        }
        catch (e) {
            console.log(e)
        }
    }
    constructor(height: number, diameter: number, maker: string, model: string, size: number, price: number, color: string) {
        super(diameter, maker, model, size, price, color);
        this.Height = height;
        Hat.counter++
    }

}