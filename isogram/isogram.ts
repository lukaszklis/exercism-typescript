class Isogram {
    public static isIsogram(input: string): boolean {
        const chars = [...input.toLowerCase().replace(/(-|\s+)/, '')]

        return chars.length === new Set(chars).size
    }
}

export default Isogram
