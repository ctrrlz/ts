{
function randInt(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max - min + 1));
}
//let numb = randInt(5, 13);
let person: { age: number; money: number; male: string}[] = [];
let obj = { age: randInt(18, 113), money: randInt(-5478,-9865), male: 'm' };
let obj1 = { age: randInt(18, 113), money: randInt(-5478,-9865), male: 'w' };
person.push(obj);
person.push(obj1);
console.log(person[0].age, "; ", person[0].money, "; ", person[0].male, ". ")
console.log('0 ', person[0]);
console.log('1 ', person[1]);
console.log(Math.max( person[0].money,  person[1].money));
console.log(Math.min( person[0].money,  person[1].money))
let sum = 0;
for(let i = 0; i< person.length; i++){
sum+=person[i].money;
}
console.log(sum)
console.log(( person[0].age + person[1].age)/person.length)
console.log(Math.max( person[0].age,  person[1].age)- Math.min(person[0].age,  person[1].age))
}
