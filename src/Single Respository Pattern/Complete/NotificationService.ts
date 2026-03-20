import User from "./User";

class NotificationService {
    sendEmail(user:User):void{
        console.log(`Sending email to name: ${user.getName()} & email: ${user.getEmail()}.`)
    }
}

