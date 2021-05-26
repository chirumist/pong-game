export default class Ball {
    constructor(ctx, x, y, radius, color) {
        this.ctx = ctx
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocityX = 1
        this.velocityY = 1
    }

    draw () {
        this.ctx.fillStyle = this.color
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.ctx.closePath()
        this.ctx.fill()
    }
    update() {
        this.draw()
        this.x += this.velocityX
        this.y += this.velocityY
    }
}