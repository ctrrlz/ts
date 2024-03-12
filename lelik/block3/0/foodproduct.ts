import{product} from "./product";
import { IProduct } from "./iproduct";
class foodproduct extends product implements IProduct{
    name: string;
    price: number;
    quantity: number;
    protected expirationDate: number;
    
 constructor(_name: string,
     _price: number,
     _quantity: number,
     _expirationDate: number,
     ) {
    super();
    if (_name) this.name = _name;
    if (_price) this.price = _price;
    if (_quantity) this.quantity = _quantity;
    if (_expirationDate) this.expirationDate = _expirationDate;
}
calculateTotalPrice(){
    return this.price*this.quantity;
 }
displayProductInfo(){
    console.log(`${this.name} ${this.price} ${this.quantity} ${this.expirationDate}`);
 }
 getDiscountedPrice(){
    return `10%`;
 }
 applyDiscount(){
     return this.price * 0.9;
 }
 isExpired(){
    if (this.expirationDate < 7032024){
        return `годен`
    }else{
        return `не годен`
    }
 }
}
export{foodproduct}