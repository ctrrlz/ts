"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MathExample_1 = require("./MathExample");
var smt = new MathExample_1.MathExample();
smt.operation = "/";
if (smt.operation == "/") {
    smt.result = smt.a / smt.b;
}
console.log(smt.toString());
smt.operation = "+";
if (smt.operation == "+") {
    smt.result = smt.a + smt.b;
}
console.log(smt.toString());
smt.operation = "*";
if (smt.operation == "*") {
    smt.result = smt.a * smt.b;
}
console.log(smt.toString());
smt.operation = "-";
if (smt.operation == "-") {
    smt.result = smt.a - smt.b;
}
console.log(smt.toString());
