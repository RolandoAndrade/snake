/**
 * @class Rectangle
 *
 * Canvas Rectangle
 * */
export class Rectangle
{
    constructor(public x: number,
                public y: number,
                public width: number,
                public height: number,
                public color: string,
                public borderColor: string = undefined,
                public lineWidth: number = undefined)
    {
        this.color=color;
        this.borderColor=borderColor?borderColor:color;
        this.lineWidth=lineWidth?lineWidth:0;
    }

    /**
     * @description Draws the rectangle.
     *
     * @param ctx Canvas where rectangle must me drown.
     * */
    draw(ctx: CanvasRenderingContext2D)
    {
        ctx.fillStyle=this.color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.borderColor;
        ctx.stroke();
        ctx.closePath();

    }

    /**
     * @description Moves the rectangle.
     * @param x New X position.
     * @param y New Y position.
     * */
    move(x: number,y: number)
    {
        this.x=x;
        this.y=y;
    }
}