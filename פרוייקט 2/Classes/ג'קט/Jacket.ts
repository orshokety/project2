class Jacket extends JucketA {
    private numberOfPockets: number;
    private erorSTR: string = `הוזן ערך שגוי במספר כיסים`;
    displayDetials():HTMLElement {
        let div: HTMLElement = document.createElement("DIV")
        document.body.appendChild(div);
        div.id = `Jacket${Jacket.counter}`;
        div.className = `inDiv`;
        Printer.divQueryId = div.id;
        Printer.printDetailsAndBR(`ג'קט`);
        Printer.printDetailsAndBR(`יצרן: ${this.maker}`);
        Printer.printDetailsAndBR(`דגם: ${this.model}`);
        Printer.printDetailsAndBR(`מידה: ${this.size}`);
        Printer.printDetailsAndBR(`מחיר: ${this.price} שקלים`);
        Printer.printDetailsAndBR(`צבע: ${this.color}`);
        Printer.printDetailsAndBR(`עובי בד: ${this.thickness}מ"מ`); 
        Printer.printDetailsAndBR(`מספר כפתורים: ${this.numberOfPockets}`);
        Printer.printDetailsAndBR(`מחיר ללא מע"מ: ${ItemA.getPriseWithoutVat(this.price)}שקלים`);
        return div;
    }
    displayImage():HTMLElement {
        var img = new Image();
        img.src = "Images/ג'קט.jpg";
        img.id = `JacketImg${Jacket.counter}`;
        img.className = `imgInDiv`
        document.body.appendChild(img);
        return img;
    }
    get brand(): string {
        return `יצרן:${this.maker}, דגם:${this.model}`
    }

    private set NumberOfPockets(numberOfPockets: number) {
        try {
            if (numberOfPockets >= 0 && numberOfPockets <= 6) {
                this.numberOfPockets = numberOfPockets
            }
            else {
                throw this.erorSTR;
            }

        }
        catch (e) {
            console.log(e)
        } 
    }
    constructor(numberOfPockets: number, thickness: number, maker: string, model: string, size: number, price: number, color: string) {
        super(thickness,maker, model, size, price, color);
        this.NumberOfPockets = numberOfPockets;
        Jacket.counter++
    }

}