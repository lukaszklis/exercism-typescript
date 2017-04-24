export default class Hamming {
    public compute(strandA: string, strandB: string): number {
        if (strandA.length !== strandB.length) {
            throw new Error('DNA strands must be of equal length.');
        }

        return strandA.split('').reduce((count, current, index) => count + Number(current.toLowerCase() !== strandB[index].toLowerCase()), 0);
    }
}
