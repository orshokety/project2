class Tester {
    private items: Array<ItemA> = []
    private counter: number;
    private static containerSide: Array<string> = [`right`, `middle`, `left`];
    private static containerLineNumber: number = 1
    private static j: number = 0;
    private set Counter(counter: number) {
        if (counter >= 1 && counter <= 2500) {
            this.counter = counter;
        }
    }

    test() {
        while (!this.counter) {
            this.Counter = Number(prompt(`רשום את מספר הפריטים בחנות(1-2500)`));
            if (!this.counter) {
                alert(`טעות בהזנת מספר אנא רשום מספר בין(1-2500)`);
            }
        } 
        for (let i = 0; i < this.counter; i++) {
            this.items.push(Generator.getRandomItem());
            let div: HTMLElement = document.createElement("DIV");
            document.body.appendChild(div);
            div.id = `${Tester.containerSide[Tester.j]}${Tester.containerLineNumber}`
            div.className=`container`
            div.appendChild(this.items[i].displayDetials());
            div.appendChild(this.items[i].displayImage());
            Printer.printDetailsAndBR(`${this.items[i].brand}`);
            if (Tester.j == 2) {
                Tester.containerLineNumber++
                
            }
            if (Tester.j == 0 || Tester.j == 1){
                Tester.j++

            }
            else {
                Tester.j=0
            }
        }

    }
}