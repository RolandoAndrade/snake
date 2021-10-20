

class Score
{
    constructor()
    {
        this.score = 0;
    }

    draw()
    {
        ctx.textAlign = "center";
        ctx.font ='250px Arial, sans-serif';
        ctx.fillStyle="#A3A3A3";
        ctx.fillText(""+this.score,200,270);
        ctx.font ='15px Arial, sans-serif';
        ctx.fillText("Rolando Andrade",200,320);
    }

    add()
    {
        this.score++;
    }
}