input.onButtonPressed(Button.A, function () {
    nombre = 0
    etat_actuel = 0
    etat_passe = 1
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . # . # .
        . . # . .
        `)
})
let etat_passe = 0
let etat_actuel = 0
let nombre = 0
nombre = 0
etat_actuel = 0
etat_passe = 1
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . #
    . # . # .
    . . # . .
    `)
basic.forever(function () {
    etat_actuel = pins.digitalReadPin(DigitalPin.P16)
    if (etat_actuel != etat_passe) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    etat_passe = etat_actuel
})
