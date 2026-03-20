







interface database {
    saveUser(userId:number):void
}


// low-level module also depend on an abstraction
class RedisDabase implements database {
    saveUser(userId:number):void {
        console.log(`Saving user with id ${userId} to Redis`)
    }
}
class MongoDB implements database {
    saveUser(userId:number):void {
        console.log(`Saving user with id ${userId} to MongoDB`)
    }
}

// let's in the future , boss want to integerate the NEON db

class NeonDatabase implements  database {
    saveUser(userId: number) {
        console.log(`Saving user with id ${userId} to NeonDB`)
    }
}

// high level module also depend on an abstraction
class UserController {
    private database : database
    constructor(database:database) {
        this.database = database
    }
    saveUser(userId:number):void {
        this.database.saveUser(userId)
    }
}
const myRedisController = new UserController(new RedisDabase())
myRedisController.saveUser(4322)
const myMongoController = new UserController(new MongoDB())
myMongoController.saveUser(10233)
const myNeonController = new UserController(new NeonDatabase())
myNeonController.saveUser(4400)

