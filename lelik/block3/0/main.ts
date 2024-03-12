import {foodproduct} from "./foodproduct";
import{product} from "./product";
import {electronicsproduct} from "./electronicsproduct";
import {closingproducts} from "./closingproducts";
let c = new closingproducts("smt", 1, 1, 1, 'red')
let n = new foodproduct('smt', 1, 1, 1);
let d = new electronicsproduct('smt', 1, 1, 1);
let s1 = n.applyDiscount();
let s2 = n.isExpired();
let g1 = d.isUnderWarranty();
let mass: product[] = [n, d];
let obh: number = n.calculateTotalPrice() + d.calculateTotalPrice() + c.calculateTotalPrice();
for (let i: number = 0; i < 13; i++) {
    console.log(mass[i].calculateTotalPrice());
    mass[i].displayProductInfo();
  }
  console.log(obh);
  console.log(s1);
  console.log(s2)
  console.log(g1);


