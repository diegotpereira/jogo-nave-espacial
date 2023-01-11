import JogoUI from "./JogoUI"


export default class Jogo {

    constructor({ jogador }) {

        this.ui = new JogoUI(this)
        this.iniciarJogador(jogador)
        this.animate() 
    }

    iniciarJogador(jogador) {
        this.jogador = jogador
        this.jogador.init({
            jogo: this,
            jogador
        })
    }
    
    draw() {
        this.ui.draw()
        this.jogador.draw();
    }
    animate = () => {

        this.ui.ctx.fillStyle = '#1e1a20'
        this.ui.ctx.fillRect(
            0,
            0,
            this.ui.DOM.canvas.width,
            this.ui.DOM.canvas.height
        )
        this.draw();

        this.animation = requestAnimationFrame(this.animate);
    }
}