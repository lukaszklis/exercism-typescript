const getFactors = (n: number) => Array.from(Array(n), (_, i: number) => i + 1).filter((factor: number) => n % factor === 0);
const plingFactor = 3;
const plangFactor = 5;
const plongFactor = 7;
const convertableFactors = [
    plingFactor,
    plangFactor,
    plongFactor,
];

const convertFactors = (factors: number[]): string => {
    const convertedFactors: string[] = [
        factors.find((factor: number) => factor === plingFactor) ? 'Pling' : '',
        factors.find((factor: number) => factor === plangFactor) ? 'Plang' : '',
        factors.find((factor: number) => factor === plongFactor) ? 'Plong' : '',
    ];

    return convertedFactors.map((cf: string) => cf).join('');
};

export default class Raindrops {
    public convert = (count: number): string => {
        const factors: number[] = getFactors(count);

        if (factors.some((factor: number) => convertableFactors.includes(factor))) {
            return convertFactors(factors);
        }

        return `${count}`;
    };
}