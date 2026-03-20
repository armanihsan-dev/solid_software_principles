//Instead of the Manager looking down at the Service, both look at an Interface.

interface MessageService {
    sendMessage(message:String):void
}

class EmailService implements MessageService {
    sendMessage(message: String): void {
        console.log(`Sending email with message :${message}`)
    }
}

class SMSService implements MessageService {
    sendMessage(message: String): void {
        console.log(`Sending SMS with message :${message}`)
    }
}

// HIGH-LEVEL MODULE (The "Lamp")

class NotificationService {
    private service: MessageService;
    constructor(service: MessageService) {
        this.service = service;
    }
    notify(message: string) {
        this.service.sendMessage(message);
    }
}

const emailInstance = new EmailService()
const smsInstance = new SMSService()

const myService = new NotificationService(emailInstance)
myService.notify('Hello world')

const SMSServiceInstance = new NotificationService(smsInstance)
SMSServiceInstance.notify('Hello world')

