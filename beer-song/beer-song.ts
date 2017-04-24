const capitalize = (input: string): string => input.charAt(0).toUpperCase() + input.slice(1);
const getLabel = (count: number): string => `${count || 'no more'} bottle${count !== 1 ? 's' : ''}`;
const maxBeerBottles: number = 99;
const minBeerBottles: number = 0;

export default class Beer {
    static verse(bottles: number): string {
        const hasBottles: boolean = !!bottles;
        const hasMultipleBottles: boolean = bottles > 1;
        const pronoun: string = hasMultipleBottles ? 'one' : 'it';
        const remainingBottlesLabel: number = hasBottles ? bottles - Number(hasBottles) : maxBeerBottles;
        const action: string = bottles ? `Take ${pronoun} down and pass it around` : 'Go to the store and buy some more';

        return [
            `${capitalize(getLabel(bottles))} of beer on the wall, ${getLabel(bottles)} of beer.\n`,
            `${action}, ${getLabel(remainingBottlesLabel)} of beer on the wall.\n`
        ].join('');
    }

    static sing(from: number = maxBeerBottles, to: number = minBeerBottles): string {
        const song: string[] = [];

        for (let i = from; i >= to; i--) {
            song.push(Beer.verse(i));
        }

        return song.join('\n');
    }
}
