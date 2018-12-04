class Printer {
    static divQueryId: string;
    static printDetailsAndBR(tmp:string) {
        document.querySelector(`#${Printer.divQueryId}`).innerHTML += `${tmp}<br>`;
    }
    static printDetails(tmp: string) {
        document.querySelector(`#${Printer.divQueryId}`).innerHTML += `${tmp}`;
    }
    static printHR() {
        let hr: HTMLElement = document.createElement("HR")
        document.body.appendChild(hr)
    }
}