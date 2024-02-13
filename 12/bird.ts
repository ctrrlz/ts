import { animal } from "./animal" 
class bird extends animal {
    private wingspan: number;
     
    public fly(){
        console.log(`${name} летит! Размах крыльев: 20 см`)
    }