import {Rectangle} from "../../shapes";
import {Snake} from "../snake";
import {GameConstants} from "../game";

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
        let collide = false;
        do
        {
            this.x = (Math.floor(Math.floor(Math.random() * GameConstants.BOARD_WIDTH) / GameConstants.SQUARE_WIDTH)) * GameConstants.SQUARE_WIDTH;
            this.y = (Math.floor(Math.floor(Math.random() * GameConstants.BOARD_HEIGHT) / GameConstants.SQUARE_WIDTH)) * GameConstants.SQUARE_WIDTH;
            for (let i = 0; i < this.snake.body.length && !collide; i++)
            {
                collide = this.snake.body[i].collision(this);
            }
        } while (collide)
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
}