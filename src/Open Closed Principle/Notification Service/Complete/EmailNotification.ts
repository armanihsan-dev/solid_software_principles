import  Notification  from './Notification'

class EmailNotification extends Notification {
    notify(message: String): void {
        console.log(`Email sent with message: ${message}`);
    }
}
export  default  EmailNotification