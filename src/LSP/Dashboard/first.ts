
class User {
    email:String;
    constructor(email:String) {
        this.email = email;
    }
    updateEmail(email:String):String {
        this.email = email;
        return  'Email updated successfully ...'
    }
}

class Admin extends  User {
    constructor(email:String) {
        super(email);
    }
}

// violate the Liskov substitution Principle
// because the methods of a child class must behave like it's parent class

class guest extends User {
    constructor(email:String) {
        super(email);
    }
    updateEmail(email:String):String {
        return 'Email cannot be updated ...'
    }
}
