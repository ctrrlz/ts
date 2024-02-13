class animal {
    public name: string;
    public age: number;
    public sound: string;

    public makeSound(): void {
        console.log(this.sound);
      }
    }
  
  export { animal };