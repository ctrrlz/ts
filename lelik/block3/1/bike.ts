import{transport} from "./transport";
class bike extends transport{
    mark: string;
    model: string;
    gos_number: number;
    protected typed: string;
    protected maxSpeed: number;
    constructor(
        _mark: string,
        _model: string,
        _gos_number: number,
        _typed: string
         ) {
        super();
        if (_mark) this.mark = _mark;
        if (_model) this.model = _model;
        if (_gos_number) this.gos_number = _gos_number;
        if (_typed) this.typed = _typed;
    }
    getInformation(){
        return `${this.mark}, ${this.model}, ${this.gos_number}, ${this.typed}, ${this.maxSpeed}.`
     }
     getType(){
        return `мотоцикл`;
     }
}
export{bike}