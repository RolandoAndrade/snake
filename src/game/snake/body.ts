import {Rectangle} from "../../shapes";
import {GameConstants} from "../game";
import {PositionAndVelocity} from "./position-and-velocity";

export class Body extends Rectangle
{
    constructor(x: number, y: number, private velocityX: number, private velocityY: number)
    {
        super(x, y, GameConstants.SQUARE_WIDTH, GameConstants.SQUARE_WIDTH, GameConstants.SNAKE_COLOR);
    }

    getPositionAndVelocity(): PositionAndVelocity {
        return {
            x: this.x,
            y: this.y,
            velocityX: this.velocityX,
            velocityY: this.velocityY
        }
    }

    forward(positionAndVelocity: PositionAndVelocity = this.getPositionAndVelocity())
    {
        super.move(positionAndVelocity.x + positionAndVelocity.velocityX,
            positionAndVelocity.y + positionAndVelocity.velocityY);
    }


    up()
    {
        if (this.velocityY === 0)
        {
            this.velocityX = 0;
            this.velocityY = -GameConstants.SNAKE_VELOCITY;
        }
    }

    down()
    {
        if (this.velocityY === 0)
        {
            this.velocityX = 0;
            this.velocityY = GameConstants.SNAKE_VELOCITY;
        }
    }

    left()
    {
        if (this.velocityX === 0)
        {
            this.velocityX = -GameConstants.SNAKE_VELOCITY;
            this.velocityY = 0;
        }
    }

    right()
    {
        if (this.velocityX === 0)
        {
            this.velocityX = GameConstants.SNAKE_VELOCITY;
            this.velocityY = 0;
        }
    }

    collision(body: Body)
    {
        return this.x === body.x && this.y === body.y;
    }
}
