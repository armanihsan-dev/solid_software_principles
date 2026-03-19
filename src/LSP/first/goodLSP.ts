interface IPayment {
    process(amount:number): void
}

class CreditCard implements  IPayment {
    public process(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
    }
}

class PayPal implements  IPayment {
    public email:String;
    constructor(email:String) {
        this.email = email;
    }
    process(amount: number) {
        console.log(`Processing PayPal payment of $${amount} to ${this.email}`);
    }
}
const p1 = new PayPal("armanihsan@gmail.com")
p1.process(2000)
