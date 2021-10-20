import {Rectangle} from "../../shapes";
import {Snake} from "../snake";
import {Food, Score} from "../score";

export class Game {
    private gameOver: boolean
    private background: Rectangle
    private snake: Snake
    private food: Food
    private score: Score

    constructor(private ctx: CanvasRenderingContext2D)
    {
        this.gameOver = true;
        this.background = new Rectangle(0,0,400,400, "#424242");
        document.addEventListener("keydown", (e)=>
        {
            if((e.keyCode === 32 || e.keyCode === 13) && this.gameOver)
            {
                this.init();
            }
        })
    }

    /**
     * @description Initialize the board params.
     * */
    init()
    {
        this.snake = new Snake();
        this.food = new Food(this.snake);
        this.score = new Score();
        this.gameOver = false;
    }


    /**
     * @description Game loop.
     * */
    loop()
    {
        this.background.draw(this.ctx);
        if(!this.gameOver)
        {
            this.snake.move();
            if(this.food.wasEaten())
            {
                this.score.add();
            }
            this.score.draw(this.ctx);
            this.snake.draw(this.ctx);
            this.food.draw(this.ctx);
            this.gameOver = !this.snake.alive;
        }
        else
        {
            this.ctx.textAlign = "center";
            this.ctx.font ='50px Arial, sans-serif';
            this.ctx.fillStyle="#fff13d";
            this.ctx.fillText("GAME OVER",200,200);
            this.ctx.font ='15px Arial, sans-serif';
            this.ctx.fillText("Press ENTER to start",200,250);
        }
    }
}



