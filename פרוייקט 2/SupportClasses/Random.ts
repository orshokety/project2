class Random {
    static arrayStr(tmp:Array<string>, leng:number):string {
       return tmp[(Math.floor(Math.random() * leng))]
    }
    static numberMaxMin(max: number, min: number): number {
        return Math.round(Math.random() * (max - min)) + min
    }
    static numberZeroToMax(max:number):number {
        return Math.round(Math.random() *max)

    }
    static model(): string {
        let str: string = ``;
        for (var i = 0; i < 9; i++) {
            str += `${Math.round(Math.random() * 9)}`
        }
        return str
    }
    static boolean():boolean {
        if (Math.round(Math.random())==0) {
            return true;
        }
        else {
            return false;
        }
    }
    static Date(start, end): Date {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

}
