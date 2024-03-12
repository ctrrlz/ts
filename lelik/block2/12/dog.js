"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.dog = void 0;
var animal_1 = require("./animal");
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.breed = 'Такса';
        _this.sound = 'гав-гав';
        return _this;
    }
    /*constructor(_breed: string, _sound?: string) {
        //super();
        if (_breed) this.breed = _breed;
        if (_sound) this.sound = _sound;}*/
    dog.prototype.bark = function () {
        console.log("".concat(this.breed, " ").concat(name, " \u043B\u0430\u0435\u0442!"));
    };
    return dog;
}(animal_1.animal));
exports.dog = dog;
