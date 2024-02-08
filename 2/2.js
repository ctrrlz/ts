//Генератор случайного целого числа в заданном диапазоне
var randArrow1 = function (min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
};
console.log(randArrow1(5, 15));
//Генератор случайного дробного числа в заданном диапазоне
var randArrow2 = function (min, max) {
    return (min + Math.random() * (max - min + 1));
};
console.log(randArrow2(5, 15));
//Генератор массива с заданным кол-вом чисел и диапазоном от/до генерации
var array = [];
for (var i = 0; i < randArrow1(5, 18); i++)
    array.push(Math.floor(Math.random() * 13));
console.log(array);
