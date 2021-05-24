export default class CanvasText {
    constructor(ctx, x, y, text, color) {
        this.x = x
        this.y = y
        this.text = text
        this.color = color
        this.ctx = ctx
    }

    draw () {
        this.ctx.fillStyle = this.color
        this.ctx.font = '75px'
        this.ctx.fillText(this.text, this.x, this.y)
    }
}