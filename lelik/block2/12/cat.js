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
exports.cat = void 0;
var animal_1 = require("./animal");
var cat = /** @class */ (function (_super) {
    __extends(cat, _super);
    function cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.color = 'Серый';
        _this.sound = 'мяу мяу';
        return _this;
    }
    cat.prototype.meow = function () {
        console.log("".concat(this.color, " \u041C\u0443\u0440\u0437\u0438\u043A \u043C\u044F\u0443\u043A\u0430\u0435\u0442"));
    };
    return cat;
}(animal_1.animal));
exports.cat = cat;
