import {Body} from "./body";
import {GameConstants} from "../game";

/**
 * @class Snake
 *
 * Player of the game.
 * */
export class Snake
{

    /// Body of the snake
    private readonly snake: Body[]

    private isAlive: boolean

    constructor()
    {
        this.snake = [];
        this.isAlive = true;
        for (let i = 0; i < 4; i++)
        {
            this.snake.push(new Body(100 - GameConstants.SQUARE_WIDTH * i, 100, GameConstants.SNAKE_VELOCITY, 0));
        }
        document.addEventListener("keydown",  (e) =>
        {
            switch (e.keyCode)
            {
                case 37:
                    this.head.left();
                    break;
                case 38:
                    this.head.up();
                    break;
                case 39:
                    this.head.right();
                    break;
                case 40:
                    this.head.down();
            }
        })
    }

    /**
     * @description Moves the snake and checks the collisions.
     * */
    move() {
        let positionAndVelocity = this.head.getPositionAndVelocity();
        for (const bodyPart of this.snake) {
            const lastPositionAndVelocity = bodyPart.getPositionAndVelocity()
            bodyPart.forward(positionAndVelocity);
            positionAndVelocity = lastPositionAndVelocity;
            this.checkCollision(bodyPart)
        }
        this.killOutside();
    }

    /**
     * @description Draws the snake.
     *
     * @param ctx Canvas where rectangle must me drown.
     * */
    draw(ctx: CanvasRenderingContext2D)
    {
        for (const bodyPart of this.snake) {
            bodyPart.draw(ctx)
        }
    }

    /**
     * @description Checks if the snake is outside of the bounds and kills it if it is.
     * */
    killOutside()
    {
        if (this.head.x < 0 || this.head.x >= GameConstants.BOARD_WIDTH || this.head.y < 0 || this.head.y >= GameConstants.BOARD_HEIGHT)
        {
            this.kill();
        }
    }

    /**
     * @description Kills the snake.
     * */
    kill()
    {
        this.isAlive = false;
    }


    /**
     * @description Checks the collisions between body parts.
     * */
    checkCollision(body: Body)
    {
        if (body != this.head) {
            if (this.head.collision(body))
            {
                this.kill();
            }
        }
    }


    /**
     * @description Adds a new part to the body.
     * */
    growUp()
    {
        const positionAndVelocity = this.tail.getPositionAndVelocity()
        this.snake.push(new Body(positionAndVelocity.x - positionAndVelocity.velocityX,
            positionAndVelocity.y - positionAndVelocity.velocityY, positionAndVelocity.velocityX, positionAndVelocity.velocityY))
    }


    /**
     * @description Head of the body.
     * */
    get head(): Body {
        return this.snake[0]
    }

    /**
     * @description Tail of the body.
     * */
    get tail(): Body {
        return this.snake[this.snake.length - 1]
    }

    /**
     * @description Public read-only alive state.
     * */
    get alive(): boolean {
        return this.isAlive
    }

    /**
     * @description Public read-only snake body.
     * */
    get body(): Body[] {
        return this.snake
    }
}