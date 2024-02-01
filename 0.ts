//0) Отобразить 4 строки любой англоязычной песни
{
const song: string[] =["she sees the vision going", "hooping line after line", "enough of the arguments", "she sips the coca cola"];
console.log(song);

//1) Сгенерировать 3 числа и отобразить результат выполнения между ними хотя бы 3 операций, которые только вы вспоминаете

let array: number[] = [];
  for (let i: number = 0; i < 3; i++) array.push(Math.random() * 13);
  console.log(array[0]*array[1]);
  console.log(array[2]+array[1]);
  console.log(array[2]/array[0]);


//2) Ввести с клавиатуры число/сгенерировать случ образом, которое будет обозначать ваш возраст.
//Определить, сколько суток вы прожили.
//Определить, сколько вы бы заработали, если бы вам за каждые прожитые сутки выдавали по 5BYN.
//Определить, сколько вы бы смогли купить себе кенгулонов, если один стоит 1313$. Курс доллара 3BYN.

function randInt(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max - min + 1));
  }
const age = randInt(1, 99);

console.log(`вы прожили ${age} суток`);
console.log(`вы бы заработали ${age*5}BYN, если бы вам за каждые прожитые сутки выдавали по 5BYN`);
console.log(`вы бы смогли купить себе ${age*5/3/1313} кенгулонов, если один стоит 1313$. Курс доллара 3BYN`);

} 