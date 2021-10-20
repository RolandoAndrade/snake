import {Rectangle} from "../../shapes";
import {Snake} from "../snake";

export class Game {
    private gameOver: boolean
    private background: Rectangle
    private snake: Snake

    constructor(private ctx: CanvasRenderingContext2D)
    {
        this.gameOver = true;
        this.background = new Rectangle(0,0,400,400, "#424242");
        this.background.draw(ctx);
        document.addEventListener("keydown", (e)=>
        {
            if((e.keyCode === 32 || e.keyCode === 13) && this.gameOver)
            {
                this.init();
            }
        })
    }

    init()
    {
        this.snake = new Snake();
        this.food = new Food(this.snake);
        this.score = new Score();
        this.gameOver = false;
    }

    loop()
    {
        if(!this.gameOver)
        {
            this.background.draw();
            this.score.draw();
            this.snake.draw();
            if(this.food.got())
            {
                this.score.add();
            }
            this.food.draw();
            this.gameOver = !this.snake.alive;
        }
        else
        {
            ctx.textAlign = "center";
            ctx.font ='50px Arial, sans-serif';
            ctx.fillStyle="#fff13d";
            ctx.fillText("GAME OVER",200,200);
            ctx.font ='15px Arial, sans-serif';
            ctx.fillText("Presiona ENTER para empezar",200,250);
        }
    }
}



