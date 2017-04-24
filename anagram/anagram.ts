const getSanitizedString = (input: string): string => input.toLowerCase().trim();
const getLettersMap = (input: string): Map<string, number> => {
    return getSanitizedString(input)
        .split('')
        .reduce((map, word) => map.set(word, map.get(word) + 1 || 1), new Map());
};

export default class Anagram {
    constructor(private input: string) {
    }

    public matches(...candidates: string[]): string[] {
        return candidates.filter((candidate: string) => this.isAnagram(candidate));
    }

    private isAnagram(candidate: string): boolean {
        const inputLettersMap = getLettersMap(this.input);
        const candidateLettersMap = getLettersMap(candidate);

        return Array.from(getSanitizedString(candidate)).every((letter: string) => {
            return (
                this.input.length === candidate.length &&
                getSanitizedString(this.input) !== getSanitizedString(candidate) &&
                inputLettersMap.get(letter) === candidateLettersMap.get(letter)
            );
        });
    }
}
