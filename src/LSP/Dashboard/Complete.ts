
interface CanUpdateEmail {
    updateEmail(email:String):void;
}

interface CanViewProfile {
    username:String;
}

class Admin implements CanUpdateEmail , CanViewProfile{
    username:String;
    constructor(username:String) {
        this.username = username;
    }
    updateEmail(email:String):void {
        console.log("Email updated successfully")
    }
}

class User implements CanViewProfile {
    username:String;
    constructor(username:String) {
        this.username = username;
    }
}