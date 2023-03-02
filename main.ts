let getal = 0
input.onButtonPressed(Button.A, function () {
    getal += 1
})
input.onButtonPressed(Button.B, function () {
    getal += 1
})
basic.forever(function () {
    basic.showNumber(getal)
})
