import Notification from "./Notification";

class WhatsAppNotification extends Notification{
    notify(message:String):void {
        console.log(`Notifying through Whatsapp with message ${message}`);
    }
}
export default WhatsAppNotification;