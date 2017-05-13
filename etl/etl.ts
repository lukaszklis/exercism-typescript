interface OldValue {
    [key: string]: string[];
}

interface NewValue {
    [key: string]: number;
}

export default function transform(dataSet: OldValue): NewValue {
    return Object.keys(dataSet).reduce((newValue: NewValue, score) => {
        dataSet[score].forEach((letter) => newValue[letter.toLowerCase()] = parseInt(score, 10));
        return newValue;
    }, {});
};
