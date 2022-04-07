input.onButtonPressed(Button.A, function () {
    radio.sendString("ESQUERRA")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("PARAR")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("DRETA")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("ENDAVANT")
})
radio.setGroup(1)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
