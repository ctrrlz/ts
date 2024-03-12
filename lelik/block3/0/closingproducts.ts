import{product} from "./product";
import { IProduct } from "./iproduct";
class closingproducts extends product implements IProduct{
    name: string;
    price: number;
    quantity: number;
    protected size: number;
    protected color: string;
    
 constructor(_name: string,
     _price: number,
     _quantity: number,
     _size: number,
     _color: string
     ) {
    super();
    if (_name) this.name = _name;
    if (_price) this.price = _price;
    if (_quantity) this.quantity = _quantity;
    if (_size) this.size = _size;
    if (_color) this.color = _color;
}
calculateTotalPrice(){
    return this.price*this.quantity;
 }
displayProductInfo(){
    console.log(`${this.name} ${this.price} ${this.quantity} ${this.size} ${this.color}`);
 }
getDiscountedPrice(){};
applyDiscount(){};
}
export{closingproducts}