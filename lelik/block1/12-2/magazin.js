"use strict";
//Вариант 2 Создайте класс «Журнал». Необходимо хранить в полях класса: название журнала, год основания, описание журнала, контактный телефон, контактный e-mail. 
//Реализуйте методы класса для ввода данных, вывода данных, реализуйте доступ к отдельным полям через методы класса.
Object.defineProperty(exports, "__esModule", { value: true });
exports.magazin = void 0;
var magazin = /** @class */ (function () {
    function magazin(_name, _year, _description, _number, _email) {
        if (_name)
            this.name = _name;
        if (_year)
            this.year = _year;
        if (_description)
            this.description = _description;
        if (_number)
            this.number = _number;
        if (_email)
            this.email = _email;
    }
    Object.defineProperty(magazin.prototype, "_name", {
        get: function () {
            return this.name;
        },
        set: function (n) {
            if (n.length > 0)
                this.name = n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(magazin.prototype, "_description", {
        get: function () {
            return this.description;
        },
        set: function (n) {
            if (n.length > 0)
                this.description = n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(magazin.prototype, "_year", {
        get: function () {
            return this.year;
        },
        set: function (n) {
            if (n > 0)
                this.year = n;
        },
        enumerable: false,
        configurable: true
    });
    magazin.prototype.toString = function () {
        return "".concat(this.name, ", ").concat(this.year, ", ").concat(this.description, ", ").concat(this.number, ", ").concat(this.email, " ");
    };
    magazin.prototype.all = function () {
        console.log("".concat(this.name));
        console.log("".concat(this.year));
        console.log("".concat(this.description));
        console.log("".concat(this.number));
        console.log("".concat(this.email));
    };
    return magazin;
}());
exports.magazin = magazin;
