// Interfaces with proper naming
interface Workable {
    doWork(): string;
}

interface BonusEligible {
    calculateBonus(): number;
}

interface MeetingAttendee {
    attendMeeting(): string;
}

interface ReportSubmitter {
    submitReport(): string;
}

// Base Employee class
class Employee implements Workable {
    constructor(
        public name: string,
        public salary: number
    ) {}

    doWork(): string {
        return `${this.name} is working`;
    }
}

// Developer - can do everything
class Developer extends Employee implements BonusEligible, MeetingAttendee, ReportSubmitter {
    constructor(name: string, salary: number) {
        super(name, salary);
    }

    calculateBonus(): number {
        return this.salary * 0.15; // 15% bonus
    }

    attendMeeting(): string {
        return `${this.name} is in sprint planning`;
    }

    submitReport(): string {
        return `${this.name} submitted code review report`;
    }

    // Inherits doWork() from Employee
}

// Intern - limited capabilities
class Intern extends Employee {
    constructor(name: string, salary: number) {
        super(name, salary);
    }

    doWork(): string {
        return `${this.name} is learning and assisting`;
    }

    // No bonus, no meetings, no reports - perfect!
}

// Senior Developer - gets higher bonus
class SeniorDeveloper extends Developer {
    calculateBonus(): number {
        return this.salary * 0.25; // 25% bonus
    }
}

// Usage
const dev = new Developer("Raj", 100000);
const intern = new Intern("Faraz", 10000);
const senior = new SeniorDeveloper("Priya", 200000);

console.log(dev.doWork());          // Raj is working
console.log(dev.calculateBonus());  // 15000
console.log(dev.attendMeeting());   // Raj is in sprint planning

console.log(intern.doWork());       // Faraz is learning and assisting
// intern.calculateBonus() // ❌ Error - doesn't exist (good!)

console.log(senior.calculateBonus()); // 50000