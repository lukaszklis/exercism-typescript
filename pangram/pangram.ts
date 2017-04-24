const alphabet: string[] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z',
];

export default class Pangram {
    constructor(private input: string) {
    }

    public isPangram = (): boolean => alphabet.every(letter => Array.from(this.input.toLowerCase()).includes(letter));
}
