const gigasecond = 10E8;

export default class Gigasecond {
    constructor(private now: Date) {
    }

    public date = (): Date => new Date(this.now.getTime() + gigasecond * 1000);
}
