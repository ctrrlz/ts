"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.devaice = void 0;
var devaice = /** @class */ (function () {
    function devaice(_name, _year) {
        if (_name)
            this.nname = _name;
        if (_year)
            this.year = _year;
    }
    Object.defineProperty(devaice.prototype, "_name", {
        get: function () {
            return this.nname;
        },
        set: function (name) {
            this.nname = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(devaice.prototype, "_year", {
        get: function () {
            return this.year;
        },
        set: function (year) {
            this.year = year;
        },
        enumerable: false,
        configurable: true
    });
    devaice.prototype.show = function () {
        console.log("".concat(this.nname));
    };
    return devaice;
}());
exports.devaice = devaice;
