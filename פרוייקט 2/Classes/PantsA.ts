abstract class PantsA extends ItemA {
    protected pantsLength: number;
    protected errSTR: string = `הוזן ערך שגוי באורך מכנסיים`;
    abstract displayDetials();
    abstract displayImage();
    protected set PantsLength(pantsLength: number) {
        try {
            if (pantsLength >= 20 && pantsLength <= 80) {
            this.pantsLength = pantsLength;
        }
        else {
            throw this.errSTR;
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    constructor(pantsLength: number, maker: string, model: string, size: number, price: number, color: string) {
        super(maker, model, price, color);
        this.PantsLength = pantsLength;
        this.Size = size;
    }

}