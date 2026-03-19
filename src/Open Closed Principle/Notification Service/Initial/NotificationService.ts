// this code is voilating the Open closed principle


class NotificationService {
    private payType: String;

    constructor(payType: String) {
        this.payType = payType;
    }
    sendNotification():void{
        if(this.payType === "Email"){
            console.log("sending Email")
        }else if(this.payType === "SMS"){
            console.log("sending SMS")
        }
    }
}

const n1 = new NotificationService("Email")
n1.sendNotification()
