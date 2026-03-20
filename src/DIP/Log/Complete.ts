
interface Logger {
    log(message:String):void
}

class ConsoleLogger implements Logger {
    log(message:String):void {
        console.log(`Logging into the console: ${message}`)
    }
}
class FileLogger implements Logger {
    log(message:String):void {
        console.log(`Logging into the file: ${message}`)
    }
}
class DatabaseLogger implements Logger {
    log(message:String):void {
        console.log(`Logging into the database: ${message}`)
    }
}

class CodeRunner {
    private logMessage:Logger

    constructor(log:Logger) {
        this.logMessage = log
    }
    run(message:String):void {
        this.logMessage.log(message)
    }
}
const myRunner = new CodeRunner(new ConsoleLogger())
myRunner.run("Hello world")

const myFileRunner = new CodeRunner(new FileLogger())
myFileRunner.run("Hello world")

const myDBRunner = new CodeRunner(new DatabaseLogger())
myDBRunner.run("Hello world")