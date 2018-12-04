 abstract class ShirtA extends ItemA {
     protected errSTR: string = `הוזן ערך שגוי באורך שרוולים`;
     abstract displayDetials();
     abstract displayImage();
     protected sleeves: number;
     protected set Sleeves(sleeves: number) {
         try {
            if (sleeves >= 20 && sleeves <= 80) {
             this.sleeves = sleeves;
            }
            else {
             throw this.errSTR;
            }
         }
         catch (e) {
             console.log(e);
         }
     }
     constructor(sleeves: number, maker: string, model: string, size: number, price: number, color: string) {
         super(maker, model, price, color);
         this.Sleeves = sleeves;
         this.Size = size;
     }

}