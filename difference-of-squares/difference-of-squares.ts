const range = (count: number): number[] => Array(count).fill(1).map((n: number, i: number) => n + i);
const sum = (numbers: number[]): number => numbers.reduce((acc: number, n: number) => acc + n, 0);

const power = 2;

export default class Squares {
    constructor(private count: number) {
    }

    get squareOfSums(): number {
        return Math.pow(sum(range(this.count)), power);
    }

    get sumOfSquares(): number {
        return sum(range(this.count).map((n: number) => Math.pow(n, power)));
    }

    get difference(): number {
        return this.squareOfSums - this.sumOfSquares;
    }
}