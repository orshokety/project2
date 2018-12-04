abstract class ItemA {
    protected errSizeSTR: string = `טעות בהזנת המידה`;
    protected errPriseSTR: string = `טעות בהזנת המחיר`;
    protected maker: string;
    protected model: string;
    protected size: number;
    protected price: number;
    protected color: string;
    abstract displayDetials();
    abstract displayImage();
    protected static counter: number = 0
    protected static getPriseWithoutVat(price: number): number {
        return Number((price * 0.83).toFixed(2))
    }
    abstract get brand();


    protected set Size(size: number) {
        try {
            if (size >= 0 && size <= 5) {
                this.size = size;
            }
            else {
                throw this.errSizeSTR;
            }
        }
        catch (e){
            console.log(e);
        }
    }
    protected set Price(price: number) {
        try {
            if (price > 100 || price < 300) {
            this.price = price;
        }
        else {
                throw this.errPriseSTR;
        }
        }
        catch (e) {
            console.log(e);
        }
    }
    constructor(maker: string = `לא הוזן`, model: string = `לא הוזן`, prise: number, color: string = `לא הוזן`) {
        this.maker = maker;
        this.model = model;
        this.Price = prise;
        this.color = color;
    }
}