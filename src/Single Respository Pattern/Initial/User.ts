// this code example is exploiting the rule of Single responsibility principle

class User {
    private  name :String;
    private email :String;

    constructor(name:String,email:String) {
        this.name = name;
        this.email = email;
    }

    saveToDB(user:User):void{
        console.log(`saving user ${user.name} to database`)
    }

    generateReport(user:User):void {
        console.log(`generating report for user ${user.name}`)
    }
    sendEmail(user:User):void{
        console.log(`sending email to ${user.email}`)
    }
}




