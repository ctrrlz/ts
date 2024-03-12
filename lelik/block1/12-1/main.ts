import { room } from "./room";
let smt = new room(55,12,43);
smt.ox = 5; 
smt.oy = 8; 
smt.oz = 4; 
smt.squareWalls();
smt.squareFloor();
smt.volume();
smt.all();
function randInt(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

let arr: room[] = [];
for(let i = 0; i<=randInt(5,13); i++){
arr.push(new room(randInt(1,10), randInt(1,10), randInt(1,10)))
}
