input.onButtonPressed(Button.A, function () {
    basket.move(-1)
})
input.onButtonPressed(Button.B, function () {
    basket.move(1)
})
let egg: game.LedSprite = null
let basket: game.LedSprite = null
basket = game.createSprite(2, 4)
while (!(game.isGameOver())) {
    egg = game.createSprite(randint(0, 5), 0)
    for (let index = 0; index <= 4; index++) {
        egg.set(LedSpriteProperty.Y, index)
        basic.pause(1000)
    }
    if (basket.isTouching(egg)) {
        egg.delete()
        game.addScore(1)
    } else {
        game.gameOver()
    }
}
