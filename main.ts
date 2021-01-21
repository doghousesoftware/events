let foo = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(foo)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        foo += 1
    }
})
