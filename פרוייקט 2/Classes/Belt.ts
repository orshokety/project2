class Belt extends ItemA{
    private buckleColor: string;
    private buckleMaterial: string;
    private beltSize: Diemensions = new Diemensions(Random.numberMaxMin(150, 300), Random.numberMaxMin(25, 50), Random.numberMaxMin(150, 300));
    displayDetials():HTMLElement {
        let div: HTMLElement = document.createElement("DIV");
        document.body.appendChild(div);
        div.id = `Belt${Belt.counter}`;
        div.className = `inDiv`;
        Printer.divQueryId = div.id;
        Printer.printDetailsAndBR(`יצרן:${this.maker}`);
        Printer.printDetailsAndBR(`דגם:${this.model}`);
        Printer.printDetailsAndBR(`מחיר:${this.price}`);
        Printer.printDetailsAndBR(`צבע החגורה:${this.color}`);
        Printer.printDetailsAndBR(`צבע האבזם:${this.buckleColor}`);
        Printer.printDetailsAndBR(`סוג חומר האבזם: ${this.buckleMaterial}`);
        Printer.printDetailsAndBR(`מידות :גובה:${this.beltSize.height}, אורך:${this.beltSize.length}, רוחב:${this.beltSize.width}`);
        Printer.printDetailsAndBR(`מחיר ללא מע"מ:${ItemA.getPriseWithoutVat(this.price)}`);
        return div;
    }
    displayImage():HTMLElement {
        var img = new Image();
        img.src = "Images/חגורה.jpg";
        img.id = `BeltImg${Belt.counter}`;
        img.className = `imgInDiv`
        document.body.appendChild(img);
        return img;
    }
    get brand(): string {
        return `יצרן:${this.maker}, דגם:${this.model}`
    }

    constructor(buckleColor: string, buckleMaterial: string, maker: string, model: string, price: number, color: string) {
        super(maker, model, price, color);
        this.buckleColor = buckleColor;
        this.buckleMaterial = buckleMaterial;
        Belt.counter++;
    }

}
class Diemensions {
    height: number;
    width: number;
    length: number;
    set Height(height:number) {
        if (height > 0) {
            this.height=height
        }
    }
    set Width(width: number) {
        if (width > 0) {
            this.width = width
        }
    }
    set Length(length: number) {
        if (length > 0) {
            this.length = length
        }
    }
    constructor(height: number, width: number, length: number) {
        this.Height = height;
        this.Width = width;
        this.Length = length;
       
    }
}

