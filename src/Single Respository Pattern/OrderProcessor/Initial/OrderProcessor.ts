interface Item {
    name:string,
    price:number
}

class OrderProcessor {
    protected orderId:String;
    protected  customerEmail:String
    protected items:Item[];
    protected total : number;
    constructor(oId:String, cMail:String, items:Item[], total:number) {
        this.orderId = oId;
        this.customerEmail = cMail;
        this.items = items;
        this.total = total;
    }

    calculateTotal() {
      this.total =  this.items.reduce((sum,item)=> sum + item.price, 0)
    }

    saveToDatabase() {
        console.log(`Saving order ${this.orderId} to database`);
    }
    sendConfirmationEmail() {
        console.log(`Sending email to ${this.customerEmail}`);
    }
    logOrder() {
        console.log(`Order ${this.orderId} processed at ${new Date()}`);
    }

    validateOrder():void{
        if(this.items.length <= 0) {
            throw new Error("No items in order");
        }
    }
}