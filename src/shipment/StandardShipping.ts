// @ts-ignore
import ShippingMethod from "./ShippingMethod.ts";

class StandardShipping extends ShippingMethod {

  constructor(destination: String, weight: number) {
    super(destination, weight);
  }
  public calculateCost(): number {
    return this.weight * 15;
  }

  public getDetails(): String {
    return `Standard Shipping to ${this.destination} with weight ${this.weight}kg`;
  }

}


export default StandardShipping;