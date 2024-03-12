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
exports.nuke = void 0;
var devaice_1 = require("./devaice");
var nuke = /** @class */ (function (_super) {
    __extends(nuke, _super);
    function nuke() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.power = 220;
        _this.color = 'white';
        _this.sound = 'я - микроволновка';
        return _this;
    }
    nuke.prototype.desc = function () {
        console.log("".concat(this.power, "v, ").concat(this.color, ", ").concat(this.year));
    };
    nuke.prototype.msound = function () {
        console.log("".concat(this.sound));
    };
    return nuke;
}(devaice_1.devaice));
exports.nuke = nuke;
