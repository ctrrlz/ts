abstract class product{
    abstract name: string;
    abstract price: number;
    abstract quantity: number;
    
  public get _name(): string {
    return this.name;
  }
  public set _name(name: string) {
    this.name = name;
  }

  public get _price(): number {
    return this.price;
  }
  public set _price(price: number) {
    this.price = price;
  }
  
  public get _quantity(): number {
    return this.quantity;
  }
  public set _quantity(quantity: number) {
    this.quantity = quantity;
  }
abstract calculateTotalPrice(): void;
abstract displayProductInfo(): void;
abstract getDiscountedPrice(): void;
abstract applyDiscount():void;

}
export{product}