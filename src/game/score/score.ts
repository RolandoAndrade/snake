export class Score {
    private score: number;

    constructor() {
        this.score = 0;
    }

    /**
     * @description Draws the rectangle.
     *
     * @param ctx Canvas where rectangle must me drown.
     * */
    draw(ctx: CanvasRenderingContext2D) {
        ctx.textAlign = "center";
        ctx.font = "250px Arial, sans-serif";
        ctx.fillStyle = "#A3A3A3";
        ctx.fillText("" + this.score, 200, 270);
        ctx.font = "15px Arial, sans-serif";
        ctx.fillText("Rolando Andrade", 200, 320);
    }

    /**
     * @description Adds one to the score.
     * */
    add() {
        this.score++;
    }
}
