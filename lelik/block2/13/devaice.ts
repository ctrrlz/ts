class devaice {
  private nname: string;
    public year: number;

    constructor(_name: string, _year: number) {
      if (_name) this.nname = _name;
      if (_year) this.year = _year;}
     

    public get _name(): string {
      return this.nname;
    }
    public set _name(name: string) {
      this.nname = name;
    }
  
    public get _year(): number {
      return this.year;
    }
    public set _year(year: number) {
      this.year = year;
    }
    
    public show(){
        console.log(`${this.nname}`)
    }
    }
  
  export { devaice };