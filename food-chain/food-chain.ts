type AnimalType = 'fly' | 'spider' | 'bird' | 'cat' | 'dog' | 'goat' | 'cow' | 'horse';

interface Animal {
    name: AnimalType;
    verseNumber: number;
    rhyme?: string;
    suffix?: string;
}

const foodChain: Animal[] = [
    { name: 'fly', verseNumber: 1 },
    { name: 'spider', verseNumber: 2, rhyme: 'It wriggled and jiggled and tickled inside her.' },
    { name: 'bird', verseNumber: 3, rhyme: 'How absurd to swallow a bird!', suffix: 'that wriggled and jiggled and tickled inside her' },
    { name: 'cat', verseNumber: 4, rhyme: 'Imagine that, to swallow a cat!' },
    { name: 'dog', verseNumber: 5, rhyme: 'What a hog, to swallow a dog!' },
    { name: 'goat', verseNumber: 6, rhyme: 'Just opened her throat and swallowed a goat!' },
    { name: 'cow', verseNumber: 7, rhyme: 'I don\'t know how she swallowed a cow!' },
    { name: 'horse', verseNumber: 8 },
];
const minVerseCount: number = 1;
const maxVerseCount: number = foodChain.length;

const getAnimal = (verseNumber: number): Animal|undefined => foodChain.find((item) => item.verseNumber === verseNumber);
const toMultilineString = (input: string[]): string => input.join('\n');
const appendEmptyLine = (input: string): string => input + '\n';
const getLastLine = (verseNumber: number) => (verseNumber === maxVerseCount) ? 'She\'s dead, of course!' : 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.';
const range = (from: number, length: number): number[] => new Array(length).fill(from).map((value, index) => value + index);
const getMiddleLines = (verseNumber: number): string[] => {
    const missingVerseNumbers: number[] = range(minVerseCount + 1, verseNumber - 1).reverse();
    const lines: string[] = [];

    missingVerseNumbers.forEach((verseNumber, index) => {
        const currentAnimal: Animal|undefined = getAnimal(verseNumber);
        const previousAnimal: Animal|undefined = getAnimal(verseNumber - 1);

        if (!currentAnimal) {
            return;
        }

        if (index === 0 && currentAnimal.rhyme) {
            lines.push(currentAnimal.rhyme);
        }

        if (previousAnimal) {
            const suffix = currentAnimal.suffix ? ` ${currentAnimal.suffix}` : '';
            lines.push(`She swallowed the ${currentAnimal.name} to catch the ${previousAnimal.name}${suffix}.`);
        }
    });

    return lines;
};

export default class FoodChain {
    static verse(verseNumber: number): string {
        const animal: Animal|undefined = getAnimal(verseNumber);
        const lines: string[] = [`I know an old lady who swallowed a ${animal ? animal.name : ''}.`];

        if (verseNumber > minVerseCount && verseNumber < maxVerseCount) {
            lines.push(...getMiddleLines(verseNumber));
        }

        lines.push(getLastLine(verseNumber));

        return appendEmptyLine(toMultilineString(lines));
    }

    static verses(from: number = minVerseCount, to: number = maxVerseCount): string {
        return range(1, to - from + 1).map((verseNumber) => FoodChain.verse(verseNumber)).join('\n');
    }
}
