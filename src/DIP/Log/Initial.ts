
class ConsoleLogger {
    log(message:String):void {
        console.log(`Logging into the console: ${message}`)
    }
}


// violation of the dependency inversion principle
// Code runner depends on a specific low level tool
class CodeRunner {
    private logger:ConsoleLogger;
    constructor(logger:ConsoleLogger) {
        this.logger = logger;
    }
    run(message:String):void {
        this.logger.log(message)
    }
}
const myLogger = new ConsoleLogger()
const myRunner = new CodeRunner(myLogger)
myRunner.run("Hello world")