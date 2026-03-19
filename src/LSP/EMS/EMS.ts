
// voilated LSP code
class Employe {
    name:String;
    salary:number
    constructor(name:String,salary:number) {
        this.name = name;
        this.salary = salary
    }
    calculateBonus(): number {
        return this.salary * 0.1; // 10% bonus
    }
    work(): string {
        return `${this.name} is working`;
    }
    attendMeeting(): string {
        return `${this.name} is attending meeting`;
    }
    submitReport(): string {
        return `${this.name} submitted report`;
    }
}

class Developer extends Employe{
    work(): string {
        return `${this.name} is coding`;
    }
    //voilating the LSP
    attendMeeting(): string {
        return `${this.name} is in sprint planning`;
    }
}

class interns extends Employe {
    //voilating the LSP
    attendMeeting(): string {
        throw  new Error ("Interns are not allowed to attend meetings")
    }
    //voilating the LSP
    work(): string {
        return `${this.name} is learning`;
    }
}