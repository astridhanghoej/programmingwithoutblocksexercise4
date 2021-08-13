input.onButtonPressed(Button.A, function () {
    i += 1
    basic.showNumber(i)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    interval.push(i)
    i = 0
})
let i = 0
let interval: number[] = []
interval = []
basic.forever(function () {
	
})
