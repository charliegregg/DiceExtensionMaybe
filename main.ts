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
/**
 * Dice Roller
 */
// % color="#ad4800" icon="\u2684" block="Dice"
namespace RollingDice {
    /** Rolls a D6
     * @param Times
     */
    //% blockId=wowie block="Roll a D6 $Times Times"
    //% group="Preset" weight=91
    export function RollD6(Times: number): number {
        let Sum = 0
        for (let index = 0; index < Times; index++) {
            Sum = Sum + Math.randomRange(1, 6)
        }
        return(Sum)
    }
    /**
     * Read named setting as a number.
     * @param Timmi   The times to roll
     */
    //% blockId=wowie2
    //% block="Roll a D6 $Timmi with style..."
    //% weight=90 group="Custom"
    export function readNumber(Timmi: number) {
        return RollingDice.RollD6(Timmi);
    }
}
