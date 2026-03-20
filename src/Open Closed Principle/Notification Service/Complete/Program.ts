import notificationService from "./NotificationService";
import EmailNotification from "./EmailNotification";
import WhatsAppNotification from "./WhatsAppNotification";


//types of notification we want to send
const emailNotification = new EmailNotification()
const whatsAppNotification = new WhatsAppNotification()

//one base service for all types of notification
const AMR_NOTIFICATION_SERVICE = new notificationService()
AMR_NOTIFICATION_SERVICE.sendNotification("Hello-bacha khan",emailNotification)
AMR_NOTIFICATION_SERVICE.sendNotification("Hello-bacha khan", whatsAppNotification)
