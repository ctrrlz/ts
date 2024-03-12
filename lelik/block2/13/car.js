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
exports.car = void 0;
var devaice_1 = require("./devaice");
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 300;
        _this.sits = 4;
        _this.sound = 'я - машина';
        return _this;
    }
    car.prototype.desc = function () {
        console.log("".concat(this.speed, "m/h, ").concat(this.sits, ", ").concat(this.year));
    };
    car.prototype.msound = function () {
        console.log("".concat(this.sound));
    };
    return car;
}(devaice_1.devaice));
exports.car = car;
