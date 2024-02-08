//Генератор случайного целого числа в заданном диапазоне
const randArrow1 = (min: number, max: number): number =>
  Math.floor(min + Math.random() * (max - min + 1));
  console.log(randArrow1(5,15));
//Генератор случайного дробного числа в заданном диапазоне
const randArrow2 = (min: number, max: number): number =>
  (min + Math.random() * (max - min + 1));
  console.log(randArrow2(1,3));
//Генератор массива с заданным кол-вом чисел и диапазоном от/до генерации
  let array: number[] = [];
  for (let i: number = 0; i < randArrow1(5,18); i++) array.push(Math.floor(Math.random() * 13));
  console.log(array);
//Генератор массива чисел с повторениями для выбора кристаллика. Числа выбирать из массива, который передан в кач-ве параметра:
//a. С переданным в кач-ве одного из параметров массива с числами
//b. С переданным диапазоном, в котором числа будут сами генерироваться
 //---
// Выбор случайного файла. Пользователь выбирает перечень файлов в ФС через input -- программа отображает название файла и его размер.
 const Input: HTMLInputElement = document.createElement("input");
 const out: any = document.querySelector("#output");
