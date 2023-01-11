

export default class Jogador {

    constructor({ lutador}) {

        this.lutador = lutador;
    }

    estrela() {}
    init({ jogo }) {

        this.jogo = jogo;
        this.lutador.init({
            jogador: this,
            jogo 
        })
    }
    draw() {
        
        this.lutador.draw();
    }
}