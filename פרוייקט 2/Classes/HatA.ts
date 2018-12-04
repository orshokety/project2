abstract class HatA extends ItemA {
    protected diameter: number;
    protected errSTR: string = `הוזן ערך שגוי בקוטר`;
    abstract displayDetials();
    abstract displayImage();
    protected set Diameter(diameter: number){
        try {
            if (diameter >= 15 && diameter <= 30) {
            this.diameter = diameter;
            }
            else {
            throw this.errSTR;
            }
            }
        catch(e) {
            console.log(e)
        }
    }
    constructor(diameter: number, maker: string, model: string, size: number, price: number, color: string) {
        super(maker, model, price, color);
        this.Diameter = diameter;
        this.Size = size;

    }

}