import { product } from "./product";
import { IProduct } from "./iproduct";

class electronicsproduct extends product implements IProduct{
    name: string;
    price: number;
    quantity: number;
    public warrantyPeriod: number;
    constructor(_name: string,
        _price: number,
        _quantity: number,
        _warrantyPeriod: number,
        ) {
       super();
       if (_name) this.name = _name;
       if (_price) this.price = _price;
       if (_quantity) this.quantity = _quantity;
       if (_warrantyPeriod) this.warrantyPeriod = _warrantyPeriod;
   }
calculateTotalPrice(){
    return this.price*this.quantity;
    }
displayProductInfo(){
        console.log(`${this.name} ${this.price} ${this.quantity} ${this.warrantyPeriod}`);
    }
    getDiscountedPrice(){
        return `5%`;
     }
     applyDiscount(){
         return this.price * 0.95;
     }
     isUnderWarranty(){
         if( this.warrantyPeriod<7032024){
             return `годен`
        }else{
            return `не годен`
        }
     }
   }
   export{electronicsproduct}
