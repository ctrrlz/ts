import { animal } from "./animal" 
class cat extends animal {
    public color: string = 'Серый';
    public sound: string= 'мяу мяу'
     
    public meow(){
        console.log(`${this.color} Мурзик мяукает`)
    }}
    export{cat}