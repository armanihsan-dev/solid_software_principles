





// low-level module
class MongoDB {
    saveUser(userId:number):void {
        console.log(`Saving user with id ${userId} to MongoDB`)
    }
}

class UserController {

    // violating the dependency inversion principle
    // database is hard coded to mongoDB
    private database:MongoDB
    constructor(database:MongoDB) {
        this.database = new MongoDB()
    }

    saveUser(userId:number):void {
        this.database.saveUser(userId)
    }
}

const MongoInstance = new MongoDB()
const myController = new UserController(MongoInstance)
myController.saveUser(1)
