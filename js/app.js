import Jogador from './Jogador'
import Lutador from './Lutador'
import Jogo from './Jogo/Jogo'

const root = document.getElementById("root");

window.root = root;

const lutador = new Lutador();

const jogador = new Jogador({
    lutador
})

const jogo = new Jogo({
    jogador
})

if(import.meta.env.DEV) {

    window.jogo = jogo;
}