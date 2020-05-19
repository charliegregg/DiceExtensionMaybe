controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    blockSettings.writeString("hello", "left")
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    blockSettings.writeString("hello", "down")
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash(blockSettings.readString("hello"))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    blockSettings.writeString("hello", "right")
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    blockSettings.writeString("hello", "up")
})
game.splash("You have reset")
/*
    Dice Roller
*/
//% color="#03AA74" weight=2 icon="\uf021" block="Dice"
//% groups='["Custom", "Preset"]'
namespace RollingDice {
    /** Rolls a D6
     * @param Times
     */
    //% BlockId=wowie Block="Roll a D6 $Times Times"
    export function Roll(Times: number): number {
        let Sum = 0
        for (let index = 0; index < Times; index++) {
            Sum = Sum + Math.randomRange(1, 6)
        }
        return(Sum)
    }
}