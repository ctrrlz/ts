import { devaice } from "./devaice" ;
class car extends devaice {
    public speed: number = 300;
    public sits: number = 4;
    public sound: string= 'я - машина';
     
    
    public desc(){
        console.log(`${this.speed}m/h, ${this.sits}, ${this.year}`)
    }
    public msound(): void {
        console.log(`${this.sound}`)
    }

}
export{car}