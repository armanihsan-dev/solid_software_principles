

interface PaymentProcessor {
    processPayment(amount: number): void;
    refundAmount(amount: number): void;
    applyDiscount(amount: number): void;
}

class CreditCard implements PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
    }

    refundAmount(amount: number): void {
        console.log(`Refunding $${amount} to credit card`);
    }
    // violating the ISP by forcing implementation of unwanted method
    // In another way Also violating the SRP -
    applyDiscount(amount: number): void {
        throw new Error("Credit cards do not support discount");
    }
}
class PayPal implements PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing PayPal payment of $${amount}`);
    }

    refundAmount(amount: number): void {
        console.log(`Refunding $${amount} to PayPal`);
    }

    applyDiscount(amount: number): void {
        console.log(`Applying discount of $${amount} to PayPal payment`);
    }
}
