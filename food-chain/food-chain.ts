const animals: string[] = ['fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse'];
const maxVerseCount: number = animals.length;
const rhymes: string[] = [
    '',
    'It wriggled and jiggled and tickled inside her.',
    'How absurd to swallow a bird!',
    'Imagine that, to swallow a cat!',
    'What a hog, to swallow a dog!',
    'Just opened her throat and swallowed a goat!',
    'I don\'t know how she swallowed a cow!',
    '',
];

export default class FoodChain {
    static verse(count: number): string {
        const lines: string[] = [`I know an old lady who swallowed a ${animals[count - 1]}.`];

        if (count > 1 && count < maxVerseCount) {
            const foo = new Array(count).fill(1).map((v, i) => v + i).reverse();

            foo.map((v, i) => {
                if (i === 0) {
                    lines.push(rhymes[v - 1]);
                }
                if (v > 1) {
                    const suffix = animals[v - 1] === 'bird' ? ' that wriggled and jiggled and tickled inside her' : '';
                    lines.push(`She swallowed the ${animals[v - 1]} to catch the ${animals[v - 2]}${suffix}.`);
                }
            });
        }

        if (count !== maxVerseCount) {
            lines.push('I don\'t know why she swallowed the fly. Perhaps she\'ll die.');
        } else {
            lines.push('She\'s dead, of course!');
        }

        return lines.join('\n') + '\n';
    }

    static verses(from: number = 1, to: number = maxVerseCount): string {
        const verses = new Array(to - from + 1).fill(1).map((v, i) => v + i);
        return verses.map((verse) => FoodChain.verse(verse)).join('\n');
    }
}
