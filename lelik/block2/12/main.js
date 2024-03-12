"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dog_1 = require("./dog");
var cat_1 = require("./cat");
var bird_1 = require("./bird");
var dogi = new dog_1.dog('Бобик', 3);
var catt = new cat_1.cat('Мурзик', 5);
var bbird = new bird_1.bird('Чижик', 2);
dogi.makeSound();
catt.makeSound();
bbird.makeSound();
dogi.bark();
catt.meow();
bbird.fly();
//та же ошибка
