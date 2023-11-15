radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("REBUT")
    if (receivedNumber > dau) {
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            . # # # .
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . . . .
            # # # # #
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    dau = randint(1, 6)
    basic.showNumber(dau)
    radio.sendNumber(dau)
    basic.showString("ENVIAT")
})
let dau = 0
radio.setGroup(1)
