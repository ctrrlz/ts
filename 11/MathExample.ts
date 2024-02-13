//В качестве первой таски разработайте класс для хранения информации о математическом примере с названием MathExample, который наполните полями (свойствами):
class MathExample{
    public a: number = 10;
    public b: number = 5;
    public result: number;
    public operation: string;
    public get gresult(): number {
        return this.result;    
      }
      public set soperation(n: string) {
        if (n.length > 0) this.operation = n;
      }
    
      public toString(): string {
        return `${this.a} ${this.operation} ${this.b} = ${this.result}`;
      }
      //constructor(a?: number,b?: number) {
        
      //}
    }
    export { MathExample };