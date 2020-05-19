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
game.splash("You have reset")
// % color="#ad4800" icon="\u2684" % block="Dice"
namespace RollingDice {
    /** Rolls a D6
     * @param Times
     */
    //% BlockId=wowie Block="Roll a D6 $Times Times"
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
     * 
     * @param name   The name of the setting to read
     */
    //% blockId=block_settings_read_number
    //% block="read setting $name as number"
    //% weight=90 group="Custom"
    export function readNumber(Timmi: number) {
        return RollingDice.RollD6(Timmi);
    }
}
