export default class CanvasRect {
    constructor(ctx, x, y, width, heigth, color) {
        this.x = x
        this.y = y
        this.width = width
        this.heigth = heigth
        this.color = color
        this.ctx = ctx
    }

    draw () {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.width, this.heigth)
    }
}