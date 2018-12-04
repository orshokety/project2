class Pants extends PantsA {
    private numberOfPockets: number;
    private erorSTR: string = `הוזן ערך שגוי במספר כיסים`;
    displayDetials():HTMLElement {
        let div: HTMLElement = document.createElement("DIV")
        document.body.appendChild(div);
        div.id = `Pants${Pants.counter}`;
        div.className = `inDiv`;
        Printer.divQueryId = div.id;
        Printer.printDetailsAndBR(`מכנסיים`);
        Printer.printDetailsAndBR(`יצרן:${this.maker}`);
        Printer.printDetailsAndBR(`דגם:${this.model}`);
        Printer.printDetailsAndBR(`מידה:${this.size}`);
        Printer.printDetailsAndBR(`מחיר:${this.price} שקלים`);
        Printer.printDetailsAndBR(`צבע:${this.color}`);
        Printer.printDetailsAndBR(`אורך המכנס:${this.pantsLength} ס"מ`);
        Printer.printDetailsAndBR(`מספר כיסים:${this.numberOfPockets} ס"מ`);
        Printer.printDetailsAndBR(`מחיר ללא מע"מ:${ItemA.getPriseWithoutVat(this.price)} שקלים`);
        return div
    }
    displayImage():HTMLElement {
        var img = new Image();
        img.src = "Images/מכנסי בד.jpg";
        img.id = `PantsImg${Pants.counter}`;
        img.className = `imgInDiv`
        document.body.appendChild(img);
        return img
    }
    get brand(): string {
        return `יצרן:${this.maker}, דגם:${this.model}`
    }

    private set NumberOfPockets(numberOfPockets: number) {
        try {
            if (numberOfPockets >= 2 && numberOfPockets <= 6) {
            this.numberOfPockets = numberOfPockets
            }
            else {
            throw this.erorSTR;
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    constructor(numberOfPockets: number, pantsLength: number, maker: string, model: string, size: number, price: number, color: string) {
        super(pantsLength, maker, model, size, price, color);
        this.NumberOfPockets = numberOfPockets;
        Pants.counter++
    }

}