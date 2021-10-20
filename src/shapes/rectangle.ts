class Rectangle
{
    constructor(x,y,width, height, color, borderColor, lineWidth)
    {
        this.x=x;
        this.y=y;
        this.w=width;
        this.h=height;
        this.color=color;
        this.borderColor=borderColor?borderColor:color;
        this.lineWidth=lineWidth?lineWidth:0;
    }
    draw()
    {
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x,this.y,this.w,this.h);
        ctx.borderColor=this.borderColor;
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
}