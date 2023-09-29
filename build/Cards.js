import { lista_objetos } from "./Produtos.js";
export class Cards extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        this.build(shadow);
    }
    build(shadow) {
        lista_objetos.map((produto) => {
            const div = document.createElement("div");
            const h1 = document.createElement("h1");
            const h3 = document.createElement("h3");
            h1.innerText = produto.getDescricao();
            h3.innerText = produto.getPreco().toString();
            div.append(h1, h3);
            shadow.append(div);
        });
    }
}
customElements.define("meus-cards", Cards);