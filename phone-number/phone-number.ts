export default class PhoneNumber {
    private sanitizedInput: string;

    constructor(input: string) {
        this.sanitizedInput = input.trim().replace(/[^a-zA-Z0-9]+/g, '');
    }

    public number(): string|undefined {
        const matches = this.sanitizedInput.match(/^1?([0-9]{10})$/);

        return matches ? matches[1] : undefined;
    }
}
