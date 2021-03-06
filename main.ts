/**
 * Dice Roller
 */
let Pimannn = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
PiMan.MakeAPiman(Pimannn)
PiMan.MovePiman(Pimannn)
enum Dice {
    //% block=D2
    D2 = 2,
    //% block=D4
    D4 = 4,
    //% block=D6
    D6 = 6,
    //% block=D8
    D8 = 8,
    //% block=D10
    D10 = 10,
    //% block=D12
    D12 = 12,
    //% block=D20
    D20 = 20,
    //% block=D100
    D100 = 100
}
//% color="#ad4800" icon="\u2684" block="Dice" 
//% weight=21
namespace DiceRolling {
    /** Rolls a D6
     * @param Times    The times to roll
     */
    //% blockId=wowie block="Roll a D6 %Times times"
    //% group="Preset" weight=91
    export function RollaD6(Times: number): number {
        let Sum = 0
        for (let index = 0; index < Times; index++) {
            Sum = Sum + Math.randomRange(1, 6)
        }
        return (Sum)
    }
    /**
     * Roll a custom die.
     * @param Times   The times to roll
     * @param Sides   The Sides of a dice
     */
    //% blockId=wowie2 block="Roll a %Sides %Times times" weight=90 group="Custom"
    export function RollCustom(Sides: Dice, Times: number): number {
        let Sum2 = 0
        for (let index2 = 0; index2 < Times; index2++) {
            Sum2 = Sum2 + Math.randomRange(1, Sides)
        }
        return (Sum2)
    }
}
//% color="#2e7f3b" icon="\u03C0" block="Pi Man"
//% weight=19
namespace PiMan {
    /** Makes a Piman
     * @param Sprite    The sprite to use
     */
    //% blockId=createpiman block="Create a Pi Man using sprite %sprite"
    //% group="Create" weight=90
    export function MakeAPiman(sprite: Sprite) {
        sprite.setImage(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . 1 f . .
            . . . 4 4 4 4 4 4 4 4 4 4 4 4 .
            . . 4 4 4 4 4 4 4 4 4 4 4 4 2 .
            . 4 4 4 . 4 4 . . . . 4 4 . . .
            . 4 4 . . 4 4 . . . . 4 4 . . .
            . . . . . 4 4 . . . . 4 4 . . .
            . . . . . 4 4 . . . . 4 4 . . .
            . . . . . 4 4 . . . . 4 4 . . .
            . . . . . 4 4 . . . . 4 4 . . .
            . . . . . 4 4 . . . . 4 4 . . .
            . . . . . 4 4 . . . . 4 4 . . .
            . . . . 4 4 4 . . . . 4 4 4 . .
            . . . . 4 4 . . . . . . 4 4 . .
            . . . . . . . . . . . . . . . .
        `)
    }
    /**
     * Move a Pi Man
     * @param sprite    The sprite to use
     */
    //% blockId=MovePiMan block="Move the Pi Man %sprite with the controller" weight=100 group="Controller"
    export function MovePiman(sprite: Sprite) {
        controller.moveSprite(sprite)
    }
}
game.splash(convertToText(DiceRolling.RollCustom(0, Dice.D2)))
