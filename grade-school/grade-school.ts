const cloneArray = (inputArray: string[]): string[] => inputArray.slice(0);

export default class GradeSchool {
    private roster: Map<string, string[]> = new Map();

    public studentsInGrade = (grade: number): string[] => this.getStudentsByGrade(grade).sort();

    public studentRoster = (): Map<string, string[]> => {
        const map = new Map();
        [...this.roster.keys()].sort().forEach((grade) => map.set(grade.toString(), this.studentsInGrade(parseInt(grade, 10))));
        return map;
    }

    public addStudent(name: string, grade: number): void {
        const gradedStudents: string[] = this.getStudentsByGrade(grade);
        gradedStudents.push(name);
        gradedStudents.sort();
        this.roster.set(grade.toString(), gradedStudents);
    }

    private getStudentsByGrade = (grade: number): string[] => cloneArray(this.roster.get(grade.toString()) || []);
}
