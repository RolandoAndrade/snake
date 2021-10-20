import {Rectangle} from "../../shapes";
import {Snake} from "../snake";
import {GameConstants} from "../game";
import {shuffle} from "../../utils";

/**
 * @class Food
 *
 * Food element added to the score where is eaten by the player.
 * */
export class Food extends Rectangle
{
    constructor(private snake: Snake)
    {
        super(0, 0, GameConstants.SQUARE_WIDTH, GameConstants.SQUARE_WIDTH, GameConstants.FOOD_COLOR);
        this.generate();
    }

    /**
     * @description Generates a new food element.
     * */
    generate()
    {
        let grid = GameConstants.GRID;
        for (const part of this.snake.body) {
            grid = grid.filter((g)=>g.x!=part.x||g.y!=part.y)
        }
        if (grid.length){
            const newPosition = shuffle(grid)[0];
            this.x = newPosition.x;
            this.y = newPosition.y
        }
    }

    /**
     * @description Identifies if the food was eaten by the snake.
     * */
    wasEaten(): boolean
    {
        if (this.snake.body[0].collision(this))
        {
            this.snake.growUp();
            this.generate();
            return true;
        }
        return false;
    }

    /**
     * @description Draws the rectangle.
     *
     * @param ctx Canvas where rectangle must me drown.
     * */
    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x * GameConstants.SQUARE_WIDTH,this.y * GameConstants.SQUARE_WIDTH,
            this.width,this.height);
    }
}