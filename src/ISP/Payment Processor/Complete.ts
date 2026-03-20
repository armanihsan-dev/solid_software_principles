

interface PaymentProcessor {
    processPayment(amount: number): void;
    refundAmount(amount: number): void;
}

interface Discountable {
    applyDiscount(amount: number): void;
}

class CreditCard implements PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
    }

    refundAmount(amount: number): void {
        console.log(`Refunding $${amount} to credit card`);
    }
}
class PayPal implements PaymentProcessor , Discountable {
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
