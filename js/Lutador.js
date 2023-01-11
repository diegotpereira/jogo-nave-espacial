import {Raio} from './Raio'
import { addDomNode, createDomNode } from "./utils";

 export default class Lutador {

    constructor() {

        this.DOM = {}
        this.createElement();

        this.raio = null;

        root.appendChild(this.DOM.el);
    }

    init({jogador, jogo}) {

        this.jogador = jogador
        this.jogo = jogo;
        this.draw();
    }

    createElement() {

        const elemento = createDomNode('jogador')
        const template = document.createDocumentFragment();

        addDomNode(template, { 
            className: 'body'
        });
        addDomNode(template, {
            className: 'head'
        });
        addDomNode(template, {
            className: 'vidro'
        })

        elemento.appendChild(template);

        this.DOM.elemento = elemento;
    }
    
    draw() {}
}