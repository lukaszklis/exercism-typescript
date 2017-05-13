interface OldValue {
    [key: string]: string[];
}

interface NewValue {
    [key: string]: number;
}

export default function transform(dataSet: OldValue): NewValue {
    const newValue: NewValue = {};

    Object.keys(dataSet).forEach((points) => dataSet[points].forEach((letter) => newValue[letter.toLowerCase()] = parseInt(points, 10)));

    return newValue;
};
