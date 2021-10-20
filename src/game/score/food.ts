class Food extends Rectangle
{
    constructor(snake)
    {
        super(0, 0, SQUARE_WIDTH, SQUARE_WIDTH, "#ff406e");
        this.snake = snake;
        this.generate();
    }

    generate()
    {
        let snake = this.snake.snake;
        while (true)
        {
            this.x = (Math.floor(Math.floor(Math.random() * 400) / 20)) * 20;
            this.y = (Math.floor(Math.floor(Math.random() * 400) / 20)) * 20;
            let b = false;
            for (let i = 0; i < snake.length && !b; i++)
            {
                b = snake[i].collision(this);
            }
            if (!b)
            {
                break;
            }
        }
    }

    got()
    {
        if (this.snake.snake[0].collision(this))
        {
            this.snake.growUp();
            this.generate();
            return true;
        }
        return false;
    }
}