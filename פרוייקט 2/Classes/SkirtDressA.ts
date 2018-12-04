abstract class SkirtDressA extends ItemA{
    protected scope: number;
    protected errSTR: string = `הוזן ערך שגוי בהיקף השמלה/חצאית`;
    abstract displayDetials();
    abstract displayImage();
    protected set Scope(scope: number) {
        try {
            if (scope >= 60 && scope <= 100) {
            this.scope = scope;
            }
            else {
            throw this.errSTR;
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    constructor(scope: number, maker: string, model: string, size: number, price: number, color: string) {
        super(maker, model, price, color);
        this.Scope = scope;
        this.Size = size;
    }
    protected set Price(prise: number) {
        if (prise > 100 || prise < 300) {
            this.price = prise;
        }
        else {
            throw new Error(this.errPriseSTR)
        }
    }
}