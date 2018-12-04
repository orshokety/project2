class Glasses extends ItemA {
    private distance: number;
    private erorSTR: string = `הוזן ערך שגוי בגובה המקבעת`;
    displayDetials():HTMLElement {
        let div: HTMLElement = document.createElement("DIV")
        document.body.appendChild(div);
        div.id = `Glasses${Glasses.counter}`;
        div.className = `inDiv`;
        Printer.divQueryId = div.id;
        Printer.printDetailsAndBR(`משקפי ראייה`);
        Printer.printDetailsAndBR(`יצרן:${this.maker}`);
        Printer.printDetailsAndBR(`דגם:${this.model}`);
        Printer.printDetailsAndBR(`מחיר:${this.price} שקלים`);
        Printer.printDetailsAndBR(`צבע המסגרת:${this.color}`);
        Printer.printDetailsAndBR(`מרחק מומלץ לקריאה:${this.distance}`);
        Printer.printDetailsAndBR(`מחיר ללא מע"מ:${ItemA.getPriseWithoutVat(this.price)} שקלים`);
        return div;
    }
    displayImage():HTMLElement {
        var img = new Image();
        img.src = "Images/משקפי ראייה.jpg";
        img.id = `GlassesImg${Glasses.counter}`;
        img.className = `imgInDiv`
        document.body.appendChild(img);
        return img;
    }
    get brand(): string {
        return `יצרן:${this.maker}, דגם:${this.model}`
    }

    private set Distance(distance: number) {
        try {
            if (distance > 0 && distance <= 8) {
                this.distance = distance;
            }
            else {
                throw this.erorSTR;
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    constructor(distance: number, maker: string, model: string, price: number, color: string) {
        super(maker, model, price, color);
        this.Distance = distance;
        Glasses.counter++
    }

}