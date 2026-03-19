import ShippingMethod from "./ShippingMethod";

class ExpressShipping  extends ShippingMethod{

    constructor(destination:String, weight:number) {
        super(destination,weight);
    }

    public calculateCost(): number {
        return this.weight *  30;
    }
    public getDetails(): String {
        return `Express shipping to ${this.destination} for weight ${this.weight} kg`;
    }
}
export default ExpressShipping;