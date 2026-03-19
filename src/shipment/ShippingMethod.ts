
abstract class ShippingMethod {
  protected destination!: String;
  protected weight!: number;

  protected constructor(dest: String, weight: number) {
    this.destination = dest;
    this.weight = weight;
  }
  public abstract calculateCost(): number;
  public abstract getDetails(): String;
}

export default ShippingMethod;
