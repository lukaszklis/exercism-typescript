const dnaNucleotides: string[] = [
    'A',
    'C',
    'G',
    'T',
];

const dnaToRnaMapping: {[key: string]: string} = {
    'A': 'U',
    'C': 'G',
    'G': 'C',
    'T': 'A',
};

export default class Transcriptor {
    public toRna(nucleotidesSet: string): string {
        const nucleotides: string[] = nucleotidesSet.split('');

        if (nucleotides.some(nucleotide => !dnaNucleotides.includes(nucleotide))) {
            throw new Error('Invalid input DNA.');
        }

        return nucleotides.map(nucleotide => dnaToRnaMapping[nucleotide]).join('');
    }
}
