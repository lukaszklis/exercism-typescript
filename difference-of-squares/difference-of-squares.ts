const range = (count: number): number[] => Array(count).fill(1).map((n: number, i: number) => n + i);
const sum = (currentSum: number, n: number) => currentSum + n;

export default class Squares {
    constructor(private count: number) {
    }

    get squareOfSums(): number {
        return Math.pow(range(this.count).reduce(sum, 0), 2);
    }

    get sumOfSquares(): number {
        return range(this.count).map((n: number) => Math.pow(n, 2)).reduce(sum, 0);
    }

    get difference(): number {
        return this.squareOfSums - this.sumOfSquares;
    }
}