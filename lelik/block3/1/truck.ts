import{transport} from "./transport";
class truck extends transport{
    mark: string;
    model: string;
    gos_number: number;
    protected capacity: string;
    protected typec: string;
    constructor(
        _mark: string,
        _model: string,
        _gos_number: number,
        _typec: string,
        _capacity: string
         ) {
        super();
        if (_mark) this.mark = _mark;
        if (_model) this.model = _model;
        if (_gos_number) this.gos_number = _gos_number;
        if (_typec) this.typec = _typec;
        if (_capacity) this.capacity = _capacity;
    }
    getInformation(){
        return `${this.mark}, ${this.model}, ${this.gos_number}, ${this.typec}, ${this.capacity}.`
     }
     getType(){
        return `грузовик`;
     }
}
export{truck}