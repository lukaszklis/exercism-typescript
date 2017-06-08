const MIN_NUMBER = 0;
const MAX_NUMBER = 999999999999;
const HUNDRED = 100;
const THOUSAND = 1000;
const MILLION = 1000000;
const BILLION = 1000000000;

const wordsMap = new Map<number, string>([
    [0, 'zero'],
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [5, 'five'],
    [6, 'six'],
    [7, 'seven'],
    [8, 'eight'],
    [9, 'nine'],
    [10, 'ten'],
    [11, 'eleven'],
    [12, 'twelve'],
    [13, 'thirteen'],
    [14, 'fourteen'],
    [15, 'fifteen'],
    [16, 'sixteen'],
    [17, 'seventeen'],
    [18, 'eighteen'],
    [19, 'nineteen'],
    [20, 'twenty'],
    [30, 'thirty'],
    [40, 'forty'],
    [50, 'fifty'],
    [60, 'sixty'],
    [70, 'seventy'],
    [80, 'eighty'],
    [90, 'ninety'],
]);

const toArray = (input: number): number[] => Array.from(`${input}`).map((ns: string) => parseInt(ns, 10));
const isStandaloneZero = (n: number): boolean => toArray(n).length === 1 && n === 0;
const isValid = (n: number): boolean => n >= MIN_NUMBER && n < MAX_NUMBER;

const tenStrategy = (n: number): string => {
    if (n > 20 && n < 99) {
        const numbers = toArray(n);

        return `${wordsMap.get(numbers[0] * 10)}-${wordsMap.get(numbers[1])}`;
    }

    if (n <= 20) {
        return wordsMap.get(n)!;
    }

    return '';
};

const baseStrategy = (n: number, name: string = ''): string => {
    const normalizedNumber: number = Math.floor(n);

    if (normalizedNumber > 100) {
        return [
            hundredStrategy(normalizedNumber),
            `${tenStrategy(normalizedNumber % HUNDRED)} ${name}`,
        ].join(' ');
    }

    if (normalizedNumber > 0) {
        return `${tenStrategy(normalizedNumber)} ${name}`;
    }

    return '';
};

const hundredStrategy = (n: number): string => baseStrategy(n / HUNDRED, 'hundred');
const thousandStrategy = (n: number): string => baseStrategy(n / THOUSAND, 'thousand');
const millionStrategy = (n: number): string => baseStrategy(n / MILLION, 'million');
const billionStrategy = (n: number): string => baseStrategy(n / BILLION, 'billion');

const translate = (input: number): string => {
    const result: string[] = [];
    let n: number = input;

    result.push(billionStrategy(n));
    n = n % BILLION;

    result.push(millionStrategy(n));
    n = n % MILLION;

    result.push(thousandStrategy(n));
    n = n % THOUSAND;

    result.push(hundredStrategy(n));
    n = n % HUNDRED;

    if (n !== 0) {
        result.push(tenStrategy(n));
    }

    if (isStandaloneZero(input)) {
        result.push(tenStrategy(0));
    }

    return result.filter((word: string) => word).join(' ');
};

export default class Say {
    public inEnglish = (n: number): string => {
        if (!isValid(n)) {
            throw Error('Number must be between 0 and 999,999,999,999.');
        }

        return translate(n);
    }
}
