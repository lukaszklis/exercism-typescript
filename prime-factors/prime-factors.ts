export default function(num: number): number[] {
    const primeFactors: number[] = []
    let currentFactor: number = 2

    while (num !== 1) {
        if (num % currentFactor === 0) {
            primeFactors.push(currentFactor)
            num = num / currentFactor
            currentFactor = 2
        } else {
            currentFactor++
        }
    }

    return primeFactors
}
