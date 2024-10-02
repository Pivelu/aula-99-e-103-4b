let caunter = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(caunter)
})
input.onButtonPressed(Button.B, function () {
    caunter = 0
})
function sinalizar () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
}
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        sinalizar()
        caunter += 1
        music.ringTone(932)
        basic.pause(8)
        music.stopAllSounds()
    }
})
