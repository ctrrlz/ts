import { animal } from "./animal" 
class dog extends animal {
    public breed: string = 'Такса'; 
    public sound: string= 'гав-гав';
     
    /*constructor(_breed: string, _sound?: string) {
        //super();
        if (_breed) this.breed = _breed;
        if (_sound) this.sound = _sound;}*/

    public bark(){
        console.log(`${this.breed} ${name} лает!`)
    }}
    export {dog}