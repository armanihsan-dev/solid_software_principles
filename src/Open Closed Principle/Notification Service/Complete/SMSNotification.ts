import Notification from "./Notification";

class SMSNotification extends Notification{

    notify(message: String): void {
        console.log(`Sending SMS  with message ${message}`);
    }
}
export default SMSNotification;