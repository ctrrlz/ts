"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car_1 = require("./car");
var nuke_1 = require("./nuke");
var teapot_1 = require("./teapot");
var steamboat_1 = require("./steamboat");
var arr = [];
function randInt(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}
var c = new car_1.car('машинка', randInt(2000, 2024));
c.desc();
c.msound();
var n = new nuke_1.nuke('микроволновка', randInt(2000, 2024));
n.desc();
n.msound();
var t = new teapot_1.teapot('чайник', randInt(2000, 2024));
t.desc();
t.msound();
var s = new steamboat_1.steamboat('теплоход', randInt(2000, 2024));
s.desc();
s.msound();
arr.push(c);
arr.push(n);
arr.push(t);
arr.push(s);
for (var i = 0; i < 4; i++) {
    var a = arr[i];
    a.show();
}
//ошибка?
