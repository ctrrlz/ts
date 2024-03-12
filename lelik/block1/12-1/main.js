"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var room_1 = require("./room");
var smt = new room_1.room(55, 12, 43);
smt.ox = 5;
smt.oy = 8;
smt.oz = 4;
smt.squareWalls();
smt.squareFloor();
smt.volume();
smt.all();
function randInt(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}
var arr = [];
for (var i = 0; i <= randInt(5, 13); i++) {
    arr.push(new room_1.room(randInt(1, 10), randInt(1, 10), randInt(1, 10)));
}
