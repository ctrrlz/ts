class room{
    public ox: number;
    public oy: number;
    public oz: number;

    public get oxx(): number {
        return this.ox;
      }
      public set oxx(n: number) {
        if (n > 0) this.ox = n;
      }
      public get oyy(): number {
        return this.oy;
      }
      public set oyy(n: number) {
        if (n > 0) this.oy = n;
      }
      public get ozz(): number {
        return this.oz;
      }
      public set ozz(n: number) {
        if (n > 0) this.oz = n;
      }
  
      constructor(_ox: number, _oy: number, _oz: number,) {
        if (_ox) this.ox = _ox;
        if (_oy) this.oy = _oy;
        if (_oz) this.oz = _oz;

      }
      
      public squareWalls(): void {
        console.log(`${this.ox*this.oy*2+(this.oy*this.oz*2)}`);
      }
    
       public squareFloor(): void {
      console.log(`${this.ox*this.oy}`);
    }
    
      public volume(): void {
      console.log(`${this.ox*this.oy*this.oz}`);
    }
      public all(): void {
        console.log(`${this.ox}`);
        console.log(`${this.oy}`);
        console.log(`${this.oz}`);
        console.log(`${this.ox*this.oy*2+(this.oy*this.oz*2)}`);
        console.log(`${this.ox*this.oy}`);
        console.log(`${this.ox*this.oy*this.oz}`);
      }

}
export{room}