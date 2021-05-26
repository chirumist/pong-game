import CanvasRect from './rectangle.js'
import Ball from './ball.js'
import Bot from './bot.js'
import Player from './player.js'
import Net from './net.js'
import CanvasText from './text.js'

const canvas = document.getElementById('game-board')
const ctx =  canvas.getContext('2d')
let ballSpeed = 3
let lastRenderedTime = 0

const board = new CanvasRect(ctx, 0, 0, canvas.width, canvas.height, 'black')
const ball = new Ball(ctx, canvas.width / 2, canvas.height / 2, 10, 'white')
const bots = new Bot(ctx, canvas.width - 12, canvas.height / 2 - 100 / 2, 10, 100)
const player = new Player(ctx, 2, canvas.height / 2 - 100 / 2, 10, 100)
const botScore = new CanvasText(ctx, 3*canvas.width / 4, canvas.height / 5, '0', 'white')
const playerScore = new CanvasText(ctx, canvas.width / 4, canvas.height / 5, '0', 'white')

function draw(params) {
    board.draw()
    for (let i = 0; i < canvas.height; i+=20) {
        const net = new Net(ctx, canvas.width / 2 - 2 / 2, i  + 1, 2, 10)
        net.draw()
    }
    bots.draw()
    player.draw()
    playerScore.draw()
    botScore.draw()

    ball.update()
    if (ball.y > canvas.height || ball.y < 0) {
        ball.velocityY = - ball.velocityY
    }
    if (ball.x > canvas.width || ball.x < 0) {
        ball.velocityX = - ball.velocityX
    }
}
function main(currentTime) {
    window.requestAnimationFrame(main)
    
    draw()
}
main()

window.addEventListener('mousemove', (e) => {
    player.y = e.clientY - player.heigth / 2
    console.log(player.y,canvas.height)
    if (player.y < -1) {
        player.y = 1
    }
})