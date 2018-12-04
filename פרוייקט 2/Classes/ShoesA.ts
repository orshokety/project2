abstract class ShoesA extends ItemA {
    protected country: string;
    protected laces: boolean;
    abstract displayDetials();
    abstract displayImage();
    protected set Size(size: number) {
        try {
            if (size >= 20 && size <= 46) {
            this.size = size;
            }
            else {
                throw this.errSizeSTR;
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    protected set Price(prise: number) {
        if (prise > 200 || prise < 1000) {
            this.price = prise;
        }
        else {
            throw new Error(this.errPriseSTR)
        }
    }
    constructor(country: string, maker: string, model: string, size: number, price: number, color: string) {
        super(maker, model, price, color);
        this.country = country;
        this.Size = size;
    }

}