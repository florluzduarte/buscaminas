
export class GridElement extends HTMLElement {
    private gridSize: number;

    constructor() {
        super();
        this.gridSize = parseInt(this.getAttribute("gridSize") ?? "10");
        for (let index = 0; index <= this.gridSize; index++) {
            const celda = document.createElement("div");
            celda.classList.add('grid__celda');
            celda.classList.add(`gridCelda${index}`);
            this.appendChild(celda);
        }
    }
}

customElements.define("app-grid", GridElement);