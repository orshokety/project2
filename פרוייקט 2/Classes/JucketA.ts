abstract class JucketA extends ItemA {
    protected thickness: number;
    protected errSTR: string = `הוזן ערך שגוי בעובי הבד`;
    abstract displayDetials();
    abstract displayImage();
    protected set Thickness(thickness: number) {
        try {
            if (thickness >= 2 && thickness <= 10) {
                this.thickness = thickness;
            }
            else {
                console.log(thickness)
                throw this.errSTR;

            }

        } catch (e) {
            console.log(e)
        }
 
    }
    constructor(thickness: number, maker: string, model: string, size: number, price: number, color: string) {
        super(maker, model, price, color);
        this.Thickness = thickness;
        this.Size = size;
    }
}