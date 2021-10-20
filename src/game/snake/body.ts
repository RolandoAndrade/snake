import {Rectangle} from "../../shapes";
import {GameConstants} from "../game";
import {PositionAndVelocity} from "./position-and-velocity";

/**
 * @class Body
 *
 * Body's part of the snake.
 * */
export class Body extends Rectangle
{
    constructor(x: number, y: number, private velocityX: number, private velocityY: number)
    {
        super(x, y, GameConstants.SQUARE_WIDTH, GameConstants.SQUARE_WIDTH, GameConstants.SNAKE_COLOR);
    }

    /**
     * @description Gets the current params of the body part
     * */
    getPositionAndVelocity(): PositionAndVelocity {
        return {
            x: this.x,
            y: this.y,
            velocityX: this.velocityX,
            velocityY: this.velocityY
        }
    }

    /**
     * @description Moves to the next state.
     * @param positionAndVelocity Position and velocity of the last part.
     * */
    forward(positionAndVelocity: PositionAndVelocity = undefined)
    {
        if (!positionAndVelocity) {
            super.move(this.x + this.velocityX,
                this.y + this.velocityY);
        } else {
            super.move(positionAndVelocity.x, positionAndVelocity.y);
            this.velocityX = positionAndVelocity.x;
            this.velocityY = positionAndVelocity.y
        }

    }

    /**
     * @description Up movement.
     * */
    up()
    {
        if (this.velocityY === 0)
        {
            this.velocityX = 0;
            this.velocityY = -GameConstants.SNAKE_VELOCITY;
        }
    }

    /**
     * @description Down movement.
     * */
    down()
    {
        if (this.velocityY === 0)
        {
            this.velocityX = 0;
            this.velocityY = GameConstants.SNAKE_VELOCITY;
        }
    }

    /**
     * @description Left movement.
     * */
    left()
    {
        if (this.velocityX === 0)
        {
            this.velocityX = -GameConstants.SNAKE_VELOCITY;
            this.velocityY = 0;
        }
    }

    /**
     * @description Right movement.
     * */
    right()
    {
        if (this.velocityX === 0)
        {
            this.velocityX = GameConstants.SNAKE_VELOCITY;
            this.velocityY = 0;
        }
    }

    /**
     * @description Checks if the body collides with itself.
     * */
    collision(body: Rectangle)
    {
        return this.x === body.x && this.y === body.y;
    }
}
