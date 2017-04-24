export default class Words {
    public count(input: string): Map<string, number> {
        return input
            .trim()
            .toLowerCase()
            .split(/\s+/)
            .reduce((map, word) => map.set(word, map.get(word) + 1 || 1), new Map());
    }
}
