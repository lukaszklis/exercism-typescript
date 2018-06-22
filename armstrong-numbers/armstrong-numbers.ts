export default class ArmstrongNumbers {
    public static isArmstrongNumber(input: number): boolean {
        const digits = `${input}`.split('').map((digit) => parseInt(digit, 10))
        const factor = digits.length

        return input === digits.reduce((sum, digit) => sum + Math.pow(digit, factor), 0)
    }
}
