const alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const numbers: number[] = new Array(10).fill(0).map((v, i) => v + i);

export default class RobotName {
    private generatedName: string = '';
    private generatedNames: Set<string> = new Set();

    constructor() {
        this.resetName();
    }

    get name(): string {
        return this.generatedName;
    }

    public resetName(): void {
        this.generatedName = this.generateUniqueName();
    }

    private generateUniqueName(): string {
        let name = '';

        while (!name || this.generatedNames.has(name)) {
            name = this.generateName();
        }

        this.generatedNames.add(name);

        return name;
    }

    private generateName(): string {
        return [
            this.createPattern(2, alphabet),
            this.createPattern(3, numbers),
        ].join('');
    }

    private createPattern<T>(length: number, dataSet: T[]): string {
        return new Array(length).fill('').map(() => this.getRandom(dataSet)).join('');
    }

    private getRandom<T>(dataSet: T[]): T {
        return dataSet[Math.floor(Math.random() * dataSet.length)];
    }
}
