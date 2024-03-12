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
exports.bird = void 0;
var animal_1 = require("./animal");
var bird = /** @class */ (function (_super) {
    __extends(bird, _super);
    function bird() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wingspan = 20;
        _this.sound = 'чик-чирик';
        return _this;
    }
    bird.prototype.fly = function () {
        console.log("".concat(name, " \u043B\u0435\u0442\u0438\u0442! \u0420\u0430\u0437\u043C\u0430\u0445 \u043A\u0440\u044B\u043B\u044C\u0435\u0432: ").concat(this.wingspan, " \u0441\u043C"));
    };
    return bird;
}(animal_1.animal));
exports.bird = bird;
