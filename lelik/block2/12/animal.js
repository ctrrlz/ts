"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animal = void 0;
var animal = /** @class */ (function () {
    function animal(_name, _age, _sound) {
        if (_name)
            this.name = _name;
        if (_age)
            this.age = _age;
        if (_sound)
            this.sound = _sound;
    }
    Object.defineProperty(animal.prototype, "_name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(animal.prototype, "_age", {
        get: function () {
            return this.age;
        },
        set: function (age) {
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(animal.prototype, "_sound", {
        get: function () {
            return this.sound;
        },
        set: function (sound) {
            this.sound = sound;
        },
        enumerable: false,
        configurable: true
    });
    animal.prototype.makeSound = function () {
        console.log(this.sound);
    };
    return animal;
}());
exports.animal = animal;
