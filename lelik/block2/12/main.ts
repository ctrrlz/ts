import { animal } from "./animal" ;
import { dog } from "./dog" ;
import { cat } from "./cat" ;
import { bird } from "./bird" ;
const dogi = new dog('Бобик', 3);
const catt = new cat('Мурзик', 5);
const bbird = new bird('Чижик', 2);
dogi.makeSound();
catt.makeSound();
bbird.makeSound();
dogi.bark();
catt.meow(); 
bbird.fly();
//та же ошибка
