export default class ReverseString {
    public static reverse(input: string): string {
        return input.split('').reverse().join('')
    }
}
