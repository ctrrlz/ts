import { devaice } from "./devaice" 
class steamboat extends devaice {
    public weight: number = 6;
    public motor: string = 'винты';
    public sound: string= 'я - теплоход'
     
    
    public desc(){
        console.log(`${this.weight}t, ${this.motor}, ${this.year}`)
    }
    public msound(): void {
        console.log(`${this.sound}`)
    }

}
export{steamboat}