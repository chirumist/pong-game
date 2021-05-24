import CanvasRect from './rectangle.js'
import CanvasCircle from './circle.js'
import Bot from './bot.js'
import Player from './player.js'
import Net from './net.js'

const canvas = document.getElementById('game-board')
const ctx =  canvas.getContext('2d')

let rectX = 0

function main() {
    window.requestAnimationFrame(main)
    const board = new CanvasRect(ctx, 0, 0, canvas.width, canvas.height, 'black')
    board.draw()

    // const player = new CanvasRect(ctx, rectX, 100, 50, 50, 'white')
    // player.draw()
    // rectX += 10

    const bots = new Bot(ctx, canvas.width - 12, canvas.height / 2 - 100 / 2, 10, 100)
    bots.draw()

    const player = new Player(ctx, 2, canvas.height / 2 - 100 / 2, 10, 100)
    player.draw()

    for (let i = 0; i < canvas.height; i+=20) {
        const net = new Net(ctx, canvas.width / 2 - 2 / 2, i  + 1, 2, 10)
        net.draw()
    }
}
main()