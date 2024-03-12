"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var magazin_1 = require("./magazin");
var arr = [];
function randInt(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}
for (var i = 0; i < randInt(5, 13); i++) {
    arr.push(new magazin_1.magazin('журнал', randInt(1500, 2024), 'крутой', randInt(100000000, 999999999), "секретно"));
    console.log(arr[i].toString());
}
