import { animal } from "./animal" 
class bird extends animal {
    public wingspan: number=20;
    public sound: string= 'чик-чирик'
     
    public fly(){
        console.log(`${name} летит! Размах крыльев: ${this.wingspan} см`)
    }}
export{bird}