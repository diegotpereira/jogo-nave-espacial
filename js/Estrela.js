export default class Estrela {

    constructor({ctx}) {

        this.ctx = ctx;
        this.size = Math.random() * 1.3 + 0.3;

        this.x = rand(0, 0.9) * innerWidth;
        this.y = rand(0, 0.9) * innerHeight;

        this.dx = 0.4 + Math.random() / 100;
        this.dy = 0.4 + Math.random() / 100;
    }

    draw() {

        const ctx = this.ctx;
        ctx.beginPath();
        ctx.fillStyle = '#fff';

        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.closePath();
    }
}