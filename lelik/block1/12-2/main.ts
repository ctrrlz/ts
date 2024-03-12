import { magazin } from "./magazin";
let arr: magazin[] = [];
function randInt(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

for (let i: number = 0; i < randInt(5, 13); i++) {
    arr.push(new magazin('журнал', randInt(1500, 2024),'крутой', randInt(100000000,999999999), "секретно"))
    console.log(arr[i].toString())
  }