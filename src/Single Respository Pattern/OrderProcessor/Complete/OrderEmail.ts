import OrderProcessor from "./OrderProcessor";

class OrderEmail {
    sendEmail(order:OrderProcessor):void {
        console.log(`Sending email for order: ${order.orderId}`)
    }
}
export default OrderEmail