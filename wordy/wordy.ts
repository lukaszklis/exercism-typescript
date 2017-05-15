const numberRegex = /\^?-?\d+/g;
type Operation = 'divided by' | 'minus' | 'multiplied by' | 'plus';
const operations: Set<string> = new Set([
    'divided by',
    'minus',
    'multiplied by',
    'plus',
]);

export class WordProblem {
    constructor(private question: string) {
    }

    public answer(): number {
        if (!this.hasEnoughNumbers()) {
            throw new ArgumentError();
        }

        return this.compute();
    }

    private compute(): number {
        const numbers: number[] = this.getNumbers();
        let result: number = numbers[0];

        this.getOperations().forEach((operation: Operation, index: number) => {
            if (operation === 'plus') {
                result += numbers[index + 1];
            }

            if (operation === 'minus') {
                result -= numbers[index + 1];
            }

            if (operation === 'divided by') {
                result /= numbers[index + 1];
            }

            if (operation === 'multiplied by') {
                result *= numbers[index + 1];
            }
        });

        return result;
    }

    private hasEnoughNumbers = (): boolean => this.getNumbers().length > 1;
    private getNumbers = (): number[] => (this.question.match(numberRegex) || []).map((match) => parseInt(match, 10));
    private getOperations = (): string[] => this.question.split(numberRegex).map((v) => v.trim()).filter((v) => operations.has(v));
}

export class ArgumentError {
}
