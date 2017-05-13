const orbitalPeriodFactors = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
};

export default class SpaceAge {
    constructor(public seconds: number) {
    }

    public onEarth = (): number => this.calculateAge(orbitalPeriodFactors.earth);
    public onMercury = (): number => this.calculateAge(orbitalPeriodFactors.mercury);
    public onVenus = (): number => this.calculateAge(orbitalPeriodFactors.venus);
    public onMars = (): number => this.calculateAge(orbitalPeriodFactors.mars);
    public onJupiter = (): number => this.calculateAge(orbitalPeriodFactors.jupiter);
    public onSaturn = (): number => this.calculateAge(orbitalPeriodFactors.saturn);
    public onUranus = (): number => this.calculateAge(orbitalPeriodFactors.uranus);
    public onNeptune = (): number => this.calculateAge(orbitalPeriodFactors.neptune);

    private calculateAge = (factor: number): number => parseFloat(((this.seconds / 31557600) / factor).toFixed(2));
}
