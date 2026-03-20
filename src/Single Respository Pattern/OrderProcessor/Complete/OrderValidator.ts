import OrderProcessor from "./OrderProcessor";

class OrderValidator {
    validate(order:OrderProcessor):void{
        console.log(`Validating order: ${order.orderId}`)
        if(order.items.length <= 0) throw new Error("Invalid order total")
    }
}
export default OrderValidator