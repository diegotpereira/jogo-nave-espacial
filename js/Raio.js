export class Raio {

    constructor(jogador, lutador) {

        this.jogador = jogador;
        this.lutador = lutador;
        this.DOM = {
            el: document.createElement('div'),
        }
        this.DOM.el.classList.add('raio');

        this.active = true;
        this.height = 0;
        this.top = this.lutador.y.prev - this.height + 10;

        setTimeout(() => {

        }, 300);

        root.appendChild(this.DOM.el)

        this.draw();
    }

    draw() {}
}