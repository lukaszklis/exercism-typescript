export default class RunLengthEncoding {
    public static encode(input: string): string {
        return input.replace(/([\w\s])\1*/g, (match) => match.length > 1 ? match.length + match[0] : match[0])
    }

    public static decode(input: string): string {
        return input.replace(/(\d+)(\w|\s)/g, (_, count, char) => new Array(+count + 1).join(char))
    }
}
