import { Rectangle } from "../../shapes";
import { Snake } from "../snake";
import { Food, Score } from "../score";
import { InputManager } from "./input-manager";
import { InputKey } from "./input-key";

export class Game {
    protected gameOver: boolean;
    protected background: Rectangle;
    protected snake: Snake;
    protected food: Food;
    protected score: Score;

    constructor(protected ctx: CanvasRenderingContext2D) {
        this.gameOver = true;
        this.background = new Rectangle(0, 0, 400, 400, "#424242");
        InputManager.keyPressed(InputKey.ENTER, () => {
            if (this.gameOver) {
                this.init();
            }
        });
    }

    /**
     * @description Initialize the board params.
     * */
    init() {
        this.snake = new Snake();
        this.food = new Food(this.snake);
        this.score = new Score();
        this.gameOver = false;
    }

    /**
     * @description Game loop.
     * */
    loop() {
        this.background.draw(this.ctx);
        if (!this.gameOver) {
            this.snake.move();
            if (this.food.wasEaten()) {
                this.score.add();
            }
            this.score.draw(this.ctx);
            this.snake.draw(this.ctx);
            this.food.draw(this.ctx);
            this.gameOver = !this.snake.alive;
        } else {
            this.ctx.textAlign = "center";
            this.ctx.font = "50px Arial, sans-serif";
            this.ctx.fillStyle = "#fff13d";
            this.ctx.fillText("GAME OVER", 200, 200);
            this.ctx.font = "15px Arial, sans-serif";
            this.ctx.fillText("Press ENTER to start", 200, 250);
        }
    }
}
