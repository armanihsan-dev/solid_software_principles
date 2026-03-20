import User from "./User";


class ReportGenerator {
    generateReport(user : User):void {
        console.log(`generating report for user ${user.getName()}`)
    }
}

