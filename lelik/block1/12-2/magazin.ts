//Вариант 2 Создайте класс «Журнал». Необходимо хранить в полях класса: название журнала, год основания, описание журнала, контактный телефон, контактный e-mail. 
//Реализуйте методы класса для ввода данных, вывода данных, реализуйте доступ к отдельным полям через методы класса.

class magazin{
    public name: string;
    public year: number;
    public description: string;
    public number: number;
    public email: string;

    public get _name(): string {
        return this.name;
      }
      public set _name(n: string) {
        if (n.length > 0) this.name = n;
      }
      public get _description(): string {
        return this.description;
      }
      public set _description(n: string) {
        if (n.length > 0) this.description = n;
      }
      public get _year(): number {
        return this.year;
      }
      public set _year(n: number) {
        if (n > 0) this.year = n;
      }

    constructor(_name: string, _year: number, _description: string, _number: number, _email: string) {
        if (_name) this.name = _name;
        if (_year) this.year = _year;
        if (_description) this.description = _description;
        if (_number) this.number = _number;
        if (_email) this.email = _email;
      }

      public toString(): string {
        return `${this.name}, ${this.year}, ${this.description}, ${this.number}, ${this.email} `;
      }

    public all(): void {
        console.log(`${this.name}`);
        console.log(`${this.year}`);
        console.log(`${this.description}`);
        console.log(`${this.number}`);
        console.log(`${this.email}`);
      }
}
export{magazin}