

export default class JogoUI {

    constructor(jogo) {

        this.DOM = {};
        this.DOM.canvas = document.querySelector('canvas');
        this.ctx = this.DOM.canvas.getContext('2d', {
            
        })

        this.estrelas = [];
        this.criarEstrelas();
    }

    criarEstrelas() {

        for(let index = 0; index < 10; index += 1) {

            this.estrelas.push(new Estrela({
                ctx: this.ctx
            }))
        }
    }
}