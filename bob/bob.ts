export default class Bob {
    public hey(message: string): string {
        if (message.trim() === '') {
            return 'Fine. Be that way!';
        }

        if (message === message.toUpperCase() && message.match(/[a-zA-Z]/g)) {
            return 'Whoa, chill out!';
        }

        if (message.endsWith('?')) {
            return 'Sure.';
        }

        return 'Whatever.';
    }
}
