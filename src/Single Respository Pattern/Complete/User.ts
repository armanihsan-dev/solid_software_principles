

class User {
    protected  name :String;
    protected  email:String;

    constructor(name:String,email:String) {
        this.name = name;
        this.email = email;
    }
    getName():String {
        return this.name;
    }
    getEmail():String {
        return this.email;
    }
}

export default  User