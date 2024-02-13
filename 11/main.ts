import { MathExample } from "./MathExample";


let smt = new MathExample();
 

smt.operation = "/"; 
if(smt.operation == "/"){
    smt.result=smt.a / smt.b;
}
console.log(smt.toString());
smt.operation = "+"; 
if(smt.operation == "+"){
    smt.result=smt.a + smt.b;
}
console.log(smt.toString());
smt.operation = "*"; 
if(smt.operation == "*"){
    smt.result=smt.a * smt.b;
}
console.log(smt.toString());
smt.operation = "-"; 
if(smt.operation == "-"){
    smt.result=smt.a - smt.b;
}
console.log(smt.toString());

