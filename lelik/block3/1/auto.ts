import{transport} from "./transport";
class auto extends transport{
    mark: string;
    model: string;
    gos_number: number;
    protected typec: string;
    
 constructor(
    _mark: string,
    _model: string,
    _gos_number: number,
    _typec: string
     ) {
    super();
    if (_mark) this.mark = _mark;
    if (_model) this.model = _model;
    if (_gos_number) this.gos_number = _gos_number;
    if (_typec) this.typec = _typec;
}
getInformation(){
    return `${this.mark}, ${this.model}, ${this.gos_number}, ${this.typec}.`
 }
 getType(){
    return `автомобиль`;
 }
}
 export{auto}