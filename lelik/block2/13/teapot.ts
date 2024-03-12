import { devaice } from "./devaice" 
class teapot extends devaice {
    public volume: number = 2;
    public type: string = 'electric';
    public sound: string= 'я - чайник'
     
   
    public desc(){
        console.log(`${this.volume}l, ${this.type}, ${this.year}`)
    }
    public msound(): void {
        console.log(`${this.sound}`)
    }
}
export{teapot}