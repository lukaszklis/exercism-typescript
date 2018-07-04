const perfectNumber = 'perfect'
const abundantNumber = 'abundant'
const deficientNumber = 'deficient'

const findFactors = (num: number): number[] => [...Array(num + 1).keys()].filter((n) => n !== num && num % n === 0)
const sumFactors = (num: number): number => findFactors(num).reduce((sum, factor) => sum + factor, 0)
const isPerfectNumber = (num: number): boolean => sumFactors(num) === num
const isAbundantNumber = (num: number): boolean => sumFactors(num) > num
const isDeficientNumber = (num: number): boolean => sumFactors(num) < num

export default class PerfectNumbers {
    public static classify(num: number): string {
        if (num <= 0) {
            throw new Error('Classification is only possible for natural numbers.')
        }

        if (isPerfectNumber(num)) {
            return perfectNumber
        }

        if (isAbundantNumber(num)) {
            return abundantNumber
        }

        if (isDeficientNumber(num)) {
            return deficientNumber
        }

        return ''
    }
}
