
interface printable {
    print(): void;
}
interface scannable {
    scan(): void;
}

interface faxable {
    fax(): void;
}

class SuperPrinter implements printable, scannable, faxable {
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
class OldFashionedPrinter implements printable {
    print(): void {
        console.log("Printing...");
    }
}
