class Circle
{
    constructor(x, y, radius, color, borderColor, lineWidth)
    {
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color;
        this.borderColor=borderColor?borderColor:color;
        this.lineWidth=lineWidth?lineWidth:0;
    }

    draw()
    {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.borderColor;
        ctx.stroke();
        ctx.closePath();
    }

    move(x,y)
    {
        this.x=x;
        this.y=y;
    }

    contains(x,y)
    {
        return this.x-this.radius<=x&&this.x+this.radius>=x&&this.y+this.radius>=y&&this.y-this.radius<=y;
    }
}