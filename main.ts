/**
 * Dice Roller
 */
enum Dice {
    D2 = 2,
    D4 = 4,
    D6 = 6,
    D8 = 8,
    D10 = 10,
    D12 = 12,
    D20 = 20,
    D100 = 100
}
// %color="#ad4800" icon="\u2684" block="Dice"
// weight=42
namespace RollingDice {
    /** Rolls a D6
     * @param Times
     */
    //% blockId=wowie block="Roll a D6 $Times times"
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
     * @param Times   The times to roll
     */
    //% blockId=wowie2
    //% block="Roll a $Sides $Times times"
    //% weight=90 group="Custom"
    export function RollCustom(Times: number, Sides: Dice): number {
        let Sum2 = 0
        for (let index2 = 0; index2 < Times; index2++) {
            Sum2 = Sum2 + Math.randomRange(1, Sides)
        }
        return (Sum2)
    }
}
game.splash(convertToText(RollingDice.RollCustom(1, Dice.D20)))
