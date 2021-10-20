import {Body} from "./body";
import {GameConstants} from "../game";

export class Snake
{
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
        const head = this.snake[0];
        document.addEventListener("keydown",  (e) =>
        {
            switch (e.keyCode)
            {
                case 37:
                    head.left();
                    break;
                case 38:
                    head.up();
                    break;
                case 39:
                    head.right();
                    break;
                case 40:
                    head.down();
            }
        })
    }

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

    draw(ctx: CanvasRenderingContext2D)
    {
        for (const bodyPart of this.snake) {
            bodyPart.draw(ctx)
        }


    }

    killOutside()
    {
        if (this.head.x < 0 || this.head.x >= GameConstants.BOARD_WIDTH || this.head.y < 0 || this.head.y >= GameConstants.BOARD_HEIGHT)
        {
            this.kill();
        }
    }

    kill()
    {
        this.isAlive = false;
    }

    checkCollision(body: Body)
    {
        if (body != this.head) {
            if (this.head.collision(body))
            {
                this.kill();
            }
        }
    }

    growUp()
    {
        const positionAndVelocity = this.tail.getPositionAndVelocity()
        this.snake.push(new Body(positionAndVelocity.x - positionAndVelocity.velocityX,
            positionAndVelocity.y - positionAndVelocity.velocityY, positionAndVelocity.velocityX, positionAndVelocity.velocityY))
    }
    
    get head(): Body {
        return this.snake[0]
    }

    get tail(): Body {
        return this.snake[this.snake.length - 1]
    }
}