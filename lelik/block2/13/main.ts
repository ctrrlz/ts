import { devaice } from "./devaice";
import { car } from "./car" ;
import { nuke } from "./nuke" ; 
import { teapot } from "./teapot"; 
import { steamboat } from "./steamboat"; 
let arr: devaice[] = []
function randInt(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max - min + 1));
  }
  let c = new car('машинка', randInt(2000, 2024));
  c.desc();
  c.msound();
  let n = new nuke('микроволновка', randInt(2000, 2024));
  n.desc();
  n.msound();
  let t = new teapot('чайник',randInt(2000, 2024));
  t.desc();
  t.msound();
  let s = new steamboat('теплоход',randInt(2000, 2024));
  s.desc();
  s.msound();
arr.push(c);
arr.push(n);
arr.push(t);
arr.push(s);

for(let i = 0; i<4; i++){
    let a: devaice = arr[i];
    a.show();
}

//ошибка?
