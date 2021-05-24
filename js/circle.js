export default class CanvasCircle {
    constructor(ctx, x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.ctx = ctx
    }

    draw () {
        this.ctx.fillStyle = this.color
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.ctx.closePath()
        this.ctx.fill()
    }
}