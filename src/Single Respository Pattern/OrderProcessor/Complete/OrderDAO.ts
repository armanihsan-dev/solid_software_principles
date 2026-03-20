import OrderProcessor from "./OrderProcessor";


class OrderDAO {
    saveOrder(order:OrderProcessor):void {
        console.log(`Saving order: ${order.orderId} to database`)
    }
    cancelOrder(order:OrderProcessor):void {
        console.log(`Cancelling order: ${order.orderId}`)
    }
}
export default OrderDAO