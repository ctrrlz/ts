class animal {
    public name: string;
    public age: number;
    public sound: string;

    constructor(_name: string, _age?: number, _sound?: string) {
      if (_name) this.name = _name;
      if (_age) this.age = _age;
      if (_sound) this.sound = _sound;}

    public get _name(): string {
      return this.name;
    }
    public set _name(name: string) { 
      this.name = name;
    }
  
    public get _age(): number {
      return this.age;
    }
    public set _age(age: number) {
      this.age = age;
    }

    public get _sound(): string {
      return this.sound;
    }
    public set _sound(sound: string) {
      this.sound = sound;
    }

    public makeSound(): void {
        console.log(this.sound);
      }
    }
  
  export { animal }