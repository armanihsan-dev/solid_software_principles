
interface SmartMachine {
    print(): void;
    scan(): void;
    fax(): void;
}

class SuperPrinter implements SmartMachine {
    print(): void {
        console.log("Printing...");
    }
    scan(): void {
        console.log("Scanning...");
    }
    fax(): void {
        console.log("Faxing...");
    }
}
class OldFashionedPrinter implements SmartMachine {
    print(): void {
        console.log("Printing...");
    }

    // violating the ISP
    // the SRP as well as ISP
    scan(): void {
        //NOT SUPPORTED
        throw new Error("Scan not supported");
    }
    // violating the ISP
    // the SRP as well as ISP
    fax(): void {
        //NOT SUPPORTED
        throw new Error("Fax not supported");
    }
}
