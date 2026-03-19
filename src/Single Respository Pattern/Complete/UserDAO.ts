import User from "./User";

class UserDAO {
    insertUser(user:User):void {
        console.log(`saving user ${user.getName()} to database`)
    }
    getUser(userId:number):void {
        console.log(`getting user ${userId} from database`)
    }
    updateUser(user:User):void {
        console.log(`updating user ${user.getName()} to database`)
    }
    deleteUser(userId:number):void {
        console.log(`deleting user ${userId} from database`)
    }
}