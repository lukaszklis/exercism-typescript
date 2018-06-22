const keyLength = 100
const minCharCode = 97
const maxCharCode = 122
const alphabetLength = 26

class SimpleCipher {
    public key: string

    constructor(key?: string) {
        if (key !== undefined && !/[a-z]/.test(key)) {
            throw new Error('Bad key')
        }

        this.key = key || this.getRandomKey()
    }

    public encode(input: string): string {
        return input
            .split('')
            .map((_, index) => {
                let encodedCharCode: number = input.charCodeAt(index) + this.getCharCodeOffset(index)

                if (encodedCharCode > maxCharCode) {
                    encodedCharCode -= alphabetLength
                }

                return String.fromCharCode(encodedCharCode)
            })
            .join('')
    }

    public decode(input: string): string {
        return input
            .split('')
            .map((_, index) => {
                let encodedCharCode: number = input.charCodeAt(index) - this.getCharCodeOffset(index)

                if (encodedCharCode < minCharCode) {
                    encodedCharCode += alphabetLength
                }

                return String.fromCharCode(encodedCharCode)
            })
            .join('')
    }

    private getRandomKey(): string {
        return [...Array(keyLength)]
            .map(() => Math.floor(Math.random() * alphabetLength) + minCharCode)
            .map((charCode) => String.fromCharCode(charCode))
            .join('')
    }

    private getCharCodeOffset(index: number): number {
        return this.key.charCodeAt(index % this.key.length) - minCharCode
    }
}

export default SimpleCipher
