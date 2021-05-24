export default class Net{
    constructor(ctx, x, y, width, heigth) {
        this.x = x
        this.y = y
        this.width = width
        this.heigth = heigth
        this.color = 'white'
        this.score = 0
        this.ctx = ctx
    }

    draw () {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.width, this.heigth)   
    }
}