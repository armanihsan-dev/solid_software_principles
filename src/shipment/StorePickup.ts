import ShippingMethod from "./ShippingMethod";

class  StorePickup extends  ShippingMethod{

    constructor(destination: String, weight: number) {
        super(destination, weight);
    }

    public calculateCost(): number {
        return  0
    }
    public getDetails(): String {
        return `Store pickup at ${this.destination} for weight ${this.weight} kg`;
    }

}
export default StorePickup;