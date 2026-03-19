import StandardShipping from "./StandardShipping";
import ExpressShipping from "./ExpressShipping";
import ShipmentService from "./ShipmentService";
import StorePickup from "./StorePickup";

const s1 : StandardShipping  = new StandardShipping("Karachi",150);
const s2 : StandardShipping  = new StandardShipping("Lahore", 150);
const s3 : StandardShipping =  new StandardShipping("Kabul",20)
const s4 : StorePickup = new StorePickup("Rawalpindi", 20)



const AMR_SHIPMENT_SERVICE =  new ShipmentService()
AMR_SHIPMENT_SERVICE.addShipment(s1)
AMR_SHIPMENT_SERVICE.addShipment(s2)
AMR_SHIPMENT_SERVICE.addShipment(s3)
AMR_SHIPMENT_SERVICE.addShipment(s4)

console.log(AMR_SHIPMENT_SERVICE.totalShipmentsCost())