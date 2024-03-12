"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathExample = void 0;
//В качестве первой таски разработайте класс для хранения информации о математическом примере с названием MathExample, который наполните полями (свойствами):
var MathExample = /** @class */ (function () {
    function MathExample() {
        this.a = 10;
        this.b = 5;
        //constructor(a?: number,b?: number) {
        //}
    }
    Object.defineProperty(MathExample.prototype, "gresult", {
        get: function () {
            return this.result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MathExample.prototype, "soperation", {
        set: function (n) {
            if (n.length > 0)
                this.operation = n;
        },
        enumerable: false,
        configurable: true
    });
    MathExample.prototype.toString = function () {
        return "".concat(this.a, " ").concat(this.operation, " ").concat(this.b, " = ").concat(this.result);
    };
    return MathExample;
}());
exports.MathExample = MathExample;
