import OrderProcessor, {Item} from "./OrderProcessor";
import OrderDAO from "./OrderDAO";
import OrderEmail from "./OrderEmail";

const orderItems: Item[] = [
    { name: "Wireless Mouse", price: 25 },
    { name: "USB-C Cable", price: 12.99 },
    { name: "Laptop Stand", price: 45 },
    { name: "Webcam", price: 69 }
];

const order1 = new OrderProcessor("01","armankhan@gmail.com",orderItems)
const orderDao = new OrderDAO()
const orderEmail = new OrderEmail()
orderDao.saveOrder(order1)
orderEmail.sendEmail(order1)
