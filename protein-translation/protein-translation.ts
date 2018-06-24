const proteinStop = 'STOP'
const proteinsMap = new Map<string, string[]>([
    ['Methionine', ['AUG']],
    ['Phenylalanine', ['UUU', 'UUC']],
    ['Leucine', ['UUA', 'UUG']],
    ['Serine', ['UCU', 'UCC', 'UCG', 'UCA']],
    ['Tyrosine', ['UAU', 'UAC']],
    ['Cysteine', ['UGU', 'UGC']],
    ['Tryptophan', ['UGG']],
    [proteinStop, ['UAA', 'UAG', 'UGA']],
])

export default class ProteinTranslation {
    public static proteins(rna: string): string[] {
        const codons = rna.match(/.{3}/g) || []
        let proteins: string[] = []

        for (const codon of codons) {
            const [protein] = [...proteinsMap.entries()]
                .filter(([_, codons]) => codons.includes(codon))
                .map(([protein]) => protein)

            if (protein) {
                proteins.push(protein)
            }
        }

        const arrayEnd = proteins.indexOf(proteinStop) > -1 ? proteins.indexOf(proteinStop) : undefined

        return proteins.slice(0, arrayEnd)
    }
}
