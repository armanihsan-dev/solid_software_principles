export interface Item {
    name:string,
    price:number
}

class OrderProcessor {
     orderId:String;
     customerEmail:String
     items:Item[];
     total : number;
    constructor(oId:String, cMail:String, items:Item[]) {
        this.orderId = oId;
        this.customerEmail = cMail;
        this.items = items;
    }
    calculateTotal() {
        this.total =  this.items.reduce((sum,item)=> sum + item.price, 0)
    }
    getTotal():void {
        console.log(`Order Total is : ${this.total}`)
    }
}
export default OrderProcessor