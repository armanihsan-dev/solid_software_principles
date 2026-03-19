
import ShippingMethod from "./ShippingMethod";

class ShipmentService {
    private shipments: ShippingMethod[] =[]

    public addShipment(shipment :ShippingMethod):void {
        this.shipments.push(shipment)
    }

    public displayAllShipments():void {
        this.shipments.forEach(shipment => console.log(shipment.getDetails()))
    }

    public totalShipmentsCost():number {
        let totalCost:number = 0;
        this.shipments.forEach(shipment => {
            totalCost += shipment.calculateCost()
        })
        return totalCost;
    }
}
export  default ShipmentService;