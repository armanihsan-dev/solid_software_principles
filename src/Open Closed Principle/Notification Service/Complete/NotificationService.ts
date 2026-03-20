import Notification from "./Notification";

class NotificationService {
    sendNotification(message:String,notification:Notification):void{
        notification.notify(message)
    }
}
export default NotificationService;