class PaymentProcessor {
    process(amount:number):void {
        console.log('processing amount',amount)
    }
}

class PayPalPaymentProcessor extends PaymentProcessor {
    // OH NO: PayPal needs a 'userEmail' to work.
    // The parent 'process' only takes 'amount'.
    process(amount: number , email?:String) :void{
        if(!email) throw new Error("cannot process payment")
        console.log('processing paypal amount', amount, email)
    }
}

function checkout(processor:PaymentProcessor,amount:number){
    processor.process(amount)
}
checkout(new PayPalPaymentProcessor(), 100)