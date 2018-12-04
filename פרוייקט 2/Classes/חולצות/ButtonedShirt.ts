class ButtonedShirt extends ShirtA {
    private erorSTR: string = `הוזן ערך שגוי במספר כפתורים`;
    private numOfButton: number;
    displayDetials():HTMLElement {
        let div: HTMLElement = document.createElement("DIV")
        document.body.appendChild(div);
        div.id = `ButtonedShirt${ButtonedShirt.counter}`;
        div.className = `inDiv`;
        Printer.divQueryId = div.id;
        Printer.printDetailsAndBR(`חולצה מכופתרת`);
        Printer.printDetailsAndBR(`יצרן: ${this.maker}`);
        Printer.printDetailsAndBR(`דגם: ${this.model}`);
        Printer.printDetailsAndBR(`מידה: ${this.size}`);
        Printer.printDetailsAndBR(`מחיר: ${this.price} שקלים`);
        Printer.printDetailsAndBR(`צבע: ${this.color}`);
        Printer.printDetailsAndBR(`אורך שרוולים: ${this.sleeves} ס"מ`);
        Printer.printDetailsAndBR(`מספר כפתורים: ${this.numOfButton}`);
        Printer.printDetailsAndBR(`מחיר ללא מע"מ: ${ItemA.getPriseWithoutVat(this.price)} שקלים`);
        return div;
    }
    displayImage():HTMLElement {
        var img = new Image();
        img.src = "Images/חולצה מכופתרת.jpg";
        img.id = `ButtonedShirtImg${ButtonedShirt.counter}`;
        img.className = `imgInDiv`;
        document.body.appendChild(img);
        return img;
    }
    get brand(): string {
        return `יצרן:${this.maker}, דגם:${this.model}`
    }

    private set NumOfButton(numOfButton: number) {
        try {
            if (numOfButton >= 4 && numOfButton <= 8) {
            this.numOfButton = numOfButton;
            }
            else {
            throw this.erorSTR;
            }
        }
        catch (e) {
            console.log(e)
        }
    }
    constructor(numOfButton: number,sleeves:number, maker: string, model: string, price: number, prise: number, color: string) {
        super(sleeves,maker, model, price, prise, color);
        this.NumOfButton = numOfButton;
        ButtonedShirt.counter++
    }

}