abstract class transport{
    abstract mark: string;
    abstract model: string;
    abstract gos_number: number;
    
  public get _mark(): string {
    return this.mark;
  }
  public set _mark(mark: string) {
    this.mark = mark;
  }

  public get _model(): string {
    return this.model;
  }
  public set _model(model: string) {
    this.model = model;
  }
  
  public get _gos_number(): number {
    return this.gos_number;
  }
  public set _gos_number(gos_number: number) {
    this.gos_number = gos_number;
  }
abstract getInformation(): void;
abstract getType():void;

}
export{transport}