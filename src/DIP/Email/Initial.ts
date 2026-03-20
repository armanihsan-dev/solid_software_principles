
// low-level module
class EmailService {
    sendEmail(message:String):void {
        console.log(`Sending email with message: ${message}`)
    }
}

class NotificationService {
    private emailService : EmailService;
    constructor(emailService:EmailService) {
        // PROBLEM : notification service depends on email service
        // it depends on a specific low level tool
        this.emailService = new EmailService();
    }

    notify(message:String):void {
        this.emailService.sendEmail(message);
    }
}

const myEmailService = new EmailService();
const myService = new NotificationService(myEmailService);

myService.notify('Hello world')