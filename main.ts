radio.onReceivedString(function (receivedString) {
    radio.sendString(receivedString)
    if (receivedString == "11001") {
        servos.P0.setAngle(0)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . .
            # # # # #
            # # # # #
            `)
        zaklenjeno = false
        pin = ""
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showString("P I N")
    pin = ""
})
input.onButtonPressed(Button.B, function () {
    pin = "" + pin + "0"
})
input.onButtonPressed(Button.A, function () {
    pin = "" + pin + "1"
})
let zaklenjeno = false
let pin = ""
radio.setGroup(88)
pin = ""
zaklenjeno = false
