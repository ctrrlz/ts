import { devaice } from "./devaice" 
class nuke extends devaice {
    public power: number = 220;
    public color: string = 'white';
    public sound: string= 'я - микроволновка'
     
    
    public desc(){
        console.log(`${this.power}v, ${this.color}, ${this.year}`)
    }
    public msound(): void {
        console.log(`${this.sound}`)
    }

}
export{nuke}